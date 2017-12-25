require("babel-polyfill");
var path = require('path')
const superagent = require('superagent');
const map = require('./map');
const trans = require('./transform');

var config = {
    server: 'http://192.168.1.100/asvape/',
    pub: '../public/build/'
}
var box = {};

function render(tpl_name, $, res, req, index) {
    if(index == 0) {
        box = {};
    }
    initTpl(req, map[tpl_name].template, index).then(val => {
        let _tpl = map[tpl_name].template;
        if(val == _tpl.length - 1) {
            for(let i = 0; i < _tpl.length; i++) {
                if(!!_tpl[i].container && _tpl[i].container !== '') {
                    $(_tpl[i].container).append(box[_tpl[i].name]);
                }else {
                    $('body').prepend(box[_tpl[i].name]);
                }
            }
            // let arr_cookies = [];
            // let ServerCookie = req.headers.cookie || '';  // 获取到cookie的字段
            // if(!!ServerCookie && ServerCookie !== '') {
            //     arr_cookies = ServerCookie.split(';');
            // }

            // if(arr_cookies.length > 0) {
            //     res.setHeader('Set-Cookie', arr_cookies.map(item => {
            //         return item + '; path=/; httponly'
            //     }));
            // }
            res.send($.html());
        }else {
            render(tpl_name, $, res, req, index + 1);
        }
    })
}

function initTpl(req, template, index) {
    let tpl = template[index];
    return new Promise((resolve, reject) => {
        if(tpl.api.length == 0) {
            box[tpl.name] = require(path.join(__dirname, config.pub + tpl.name))({});
            resolve(index);
        }else {
            load(req, resolve, reject, index, tpl, 0, {});
        }
        
    });
};

function load(req, resolve, reject, tpl_index, tpl, api_index, data) {
    let ServerCookie = req.headers.cookie || '';  // 获取到cookie的字段
    if(tpl.api[api_index].path === '' && !!tpl.api[api_index].transform) {
        console.log('transform: ', tpl.api[api_index].transform)
        let modalData = trans[tpl.api[api_index].transform]();
        if (api_index < tpl.api.lenth - 1) {
            load(req, resolve, reject, tpl_index, tpl, api_index+1, Object.assign(modalData, data))
        }else {
            box[tpl.name] = require(path.join(__dirname, config.pub + tpl.name))(Object.assign(modalData, data))
            resolve(tpl_index);
        }
        
    }else {
        let url = config.server + tpl.api[api_index].path;
        console.log('url: ', url);
        console.log(tpl.api[api_index].query)
        superagent.get(url)
            .set('Cookie', ServerCookie)
            .query(tpl.api[api_index].query || {})
            .end(function (err, response) {
                if (err) {
                    reject(err);
                } else {
                    if(response.body.code == 200) {
                        var modalData = !!tpl.api[api_index].transform && typeof trans[tpl.api[api_index].transform] == 'function' ? trans[tpl.api[api_index].transform](response.body.data) : response.body.data;
                        if (api_index < tpl.api.lenth - 1) {
                            load(req, resolve, reject, tpl_index, tpl, api_index+1, Object.assign(modalData, data))
                        }else {
                            box[tpl.name] = require(path.join(__dirname, config.pub + tpl.name))(Object.assign(modalData, data))
                            resolve(tpl_index);
                        }
                        
                    }else {
                        box[tpl.name] = '';
                        resolve(tpl_index);
                    }
                }
            });
    }
    
}


module.exports = render;