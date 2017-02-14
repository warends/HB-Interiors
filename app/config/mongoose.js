var mongoose = require('mongoose');

module.exports = function(config){
  mongoose.promise = global.Promise;
  mongoose.connect(config.db);

  var db = mongoose.connection;
  db.on('error', console.log.bind(console, 'connection error'));
  db.once('open', function cb(){
    console.log('App DB ' + config.db + ' connected!');
  });

}
