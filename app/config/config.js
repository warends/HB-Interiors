var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development : {
      rootPath: rootPath,
      db: 'mongodb://localhost/hg-interiors',
      port: process.env.PORT || 8080
  },
  test: {
      rootPath: rootPath,
      db: 'mongodb://localhost/HBtest',
      port: process.env.PORT || 8080
  },
  production: {
      rootPath: rootPath,
      db: 'mongodb://willadmin:wills817@ds011278.mlab.com:11278/wills-test',
      port: process.env.PORT || 80
  }

}
