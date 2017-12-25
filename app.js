require("babel-polyfill");
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var home = require('./routes/home');
var about = require('./routes/about');
var afterSale = require('./routes/afterSale');
var community = require('./routes/community');
var customers = require('./routes/customers');
var join = require('./routes/join');
var newCenter = require('./routes/newCenter');
var news = require('./routes/news');
var products = require('./routes/products');
var p = require('./routes/p');
var search = require('./routes/search');
var verify = require('./routes/verify');
var contact = require('./routes/contact');
var idea = require('./routes/idea');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine( '.html', require('ejs').renderFile );  // 注册html模板引擎 
app.set('view engine', 'html');  // 将模板引擎换成html

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/asvape-new/html/index', home);
app.use('/asvape-new/html/about.html', about);
app.use('/asvape-new/html/afterSale.html', afterSale);
app.use('/asvape-new/html/community.html', community);
app.use('/asvape-new/html/customers.html', customers);
app.use('/asvape-new/html/join.html', join);
app.use('/asvape-new/html/newCenter.html', newCenter);
app.use('/asvape-new/html/news.html', news);
app.use('/asvape-new/html/home.html', home);
app.use('/asvape-new/html/products.html', products);
app.use('/asvape-new/html/p.html', p);
app.use('/asvape-new/html/search.html', search);
app.use('/asvape-new/html/verify.html', verify);
app.use('/asvape-new/html/contact.html', contact);
app.use('/asvape-new/html/idea.html', idea);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
