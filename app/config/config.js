var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development : {
      rootPath: rootPath,
      db: 'mongodb://localhost/hb-interiors',
      port: process.env.PORT || 8080
  },
  test: {
      rootPath: rootPath,
      db: 'mongodb://localhost/HBtest',
      port: process.env.PORT || 8080
  },
  production: {
      rootPath: rootPath,
      db: 'mongodb://willadmin:wills817@ds117485.mlab.com:17485/hb-int-prod',
      port: process.env.PORT || 80
  }

}
