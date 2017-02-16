var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var routes = require('./app/routes');

var app = express();

var config = require('./app/config/config')[env];

require('./app/config/express')(app, config);

require('./app/config/mongoose')(config);

if(process.env.NODE_ENV !== 'production'){
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
}

app.use('/', routes);


app.listen(config.port);
console.log('Server is running on port ' + config.port + ' and running environment ' + process.env.NODE_ENV.toUpperCase());

module.exports = app;
