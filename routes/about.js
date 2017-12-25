var express = require('express');
var cheerio = require('cheerio');
var fs = require('fs');
var map = require('../util/map');
var render = require('../util/render');
var router = express.Router();
var tools = require('../util/tools');
var path = require('path');
var logger = require('../util/logger');

/* GET home page. */
router.get('/', function (req, res, next) {
    logger.debug(path.join(__dirname, '../views/' + map['about'].page))
    var file_url = path.join(__dirname, '../views/' + map['about'].page)
    var dom = fs.readFileSync(file_url, 'utf-8');
    var $ = cheerio.load(dom);
    $('body').attr('data-node', 1);
    tools.setG(tools.config.init, req).then(val => {
        render('about', $, res, req, 0);
    }).catch(err => {
        console.log(err);
        res.send('Bad Requets!')
    })
    
});

module.exports = router;
