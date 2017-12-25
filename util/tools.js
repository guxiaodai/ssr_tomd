var superagent = require('superagent');
var config = {
	init: '192.168.1.100/asvape/api/site/init'
}
var _G = {
	getSearch: function (str) {
		var obj = {};
		str = str.substring(1).split('&');
		str.forEach(function (val, i) {
			var o = val.split('=');
			if (o[0]) {
				obj[o[0]] = o[1];
			}
		});
		return obj;
	},

	getQuery: function (obj) {
		var str = "?";
		for (var k in obj) {
			str += (k + "=" + obj[k] + "&");
		}
		return str;
	},

	empty: function (obj) {
		if (!!obj) {
			for (var k in obj) {
				return false;
			}
			return true;
		} else {
			return true;
		}
	},
	getUrl: function (api) {
		return this.ROOT + api;
	},
	getAllUrl: function (api) {
		return "http://192.168.1.100" + this.ROOT + api;
	},
	getArrayIndex: function (arr, val) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == val) {
				return i;
			}
		}
		return -1;
	},
	changeLang: function (lang) {
		var pathFull = window.location.href;
		var search = window.location.search;
		var param = G.getSearch(search);
		param['lang'] = lang;

		window.location.href = window.location.origin + window.location.pathname + G.getQuery(param);
	}
}

var getPage = function(allpage, curpage) {
	allpage = parseInt(allpage);
	curpage = parseInt(curpage);
	if(allpage < 6){
		var arr = [];
		for (var i = 0 ;i < allpage; i++){
			arr.push(i+1)
		}
		return arr;
	}else {
		if(curpage < 4){
			var arr = [];
			for (var i = 1; i <= curpage + 1; i++){
				arr.push(i);
			}
			arr.push('...', allpage);
			return arr;
		}else if(curpage >= allpage - 2){
			var arr = [1, '...'];
			for (var i = curpage-1; i<= allpage; i++){
				arr.push(i);
			}
			return arr;
		}else {
			var arr = [1, '...'];
			for (var i = curpage-1; i <= curpage+1; i++){
				arr.push(i);
			}
			arr.push('...', allpage);
			return arr;
		}
	}
}

var setG = function(api, req) {
	let ServerCookie = req.headers.cookie || '';  // 获取到cookie的字段

	return new Promise((resolve, reject) => {
        superagent.get(api)
        // 设置些需要的头  
        .set('Content-Type', 'application/json;charset=UTF-8')
        // set cookie字段
        .set('Cookie', ServerCookie)
        .end(function (err, response) {
            if (err) {
				reject(err);
            } else {
				//接口返回转发数据，可以在这里处理之后拼装数据
				global.G = Object.assign(_G, response.body.data)
				resolve('success');
            }
        });
    });
    
}
module.exports = {
	getPage: getPage,
	setG: setG,
	config: config
}