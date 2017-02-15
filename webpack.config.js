const path = require('path');

const config = {
  entry: './public/app/app.js',
  output: {
    path:  path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
};


module.exports = config;
