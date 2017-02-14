var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var engine = require('ejs-locals');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');

module.exports = function(app, config){

  // view engine setup
  app.engine('ejs', engine);
  app.set('views', config.rootPath + '/app/views');
  app.set('view engine', 'ejs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(config.rootPath + '/public'));
  app.use(compression());
}
