var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './client/public');
var APP_DIR = path.resolve(__dirname, './client');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   historyApiFallback: true,
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ]
};

module.exports = config;