var express = require('express');
var cheerio = require('cheerio');
var fs = require('fs');
var map = require('../util/map');
var render = require('../util/render');
var router = express.Router();
var tools = require('../util/tools');

/* GET home page. */
router.get('/', function (req, res, next) {
    map['p'].template[0].api[0].query = req.query;//存页面参数

    var dom = fs.readFileSync('views/' + map['p'].page, 'utf-8');
    var $ = cheerio.load(dom);

    $('body').attr('data-node', 1);
    tools.setG(tools.config.init, req).then(val => {
        render('p', $, res, req, 0);
    }).catch(err => {
        res.send('Bad Requets!')
    })
});

module.exports = router;
