var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var routes = require('./app/routes');

var app = express();

var config = require('./app/config/config')[env];
require('./app/config/express')(app, config);
require('./app/config/mongoose')(config);

app.use('/', routes);

app.listen(config.port);
console.log('Server is running on port ' + config.port + ' and running environment ' + env.toUpperCase());

module.exports = app;
