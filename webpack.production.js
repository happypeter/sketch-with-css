var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    { test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
    { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' }
    ]
  }
};
