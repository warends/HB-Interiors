const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const ExtractSass = new ExtractText({ filename: 'style.css' });

const VENDOR_LIBS = [
  'angular', 'angular-ui-router', 'angular-resource', 'jquery'
];
const config = {
  entry: {
    bundle: './public/app/app.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path:  path.resolve(__dirname, 'public/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractSass.extract({
          loader: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        })
      }
    ]
  },
  plugins: [
    ExtractSass,
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
    // ,
    // new HtmlWebpackPlugin({
    //   template: './app/views/layout.ejs'
    // })
  ]
};


module.exports = config;
