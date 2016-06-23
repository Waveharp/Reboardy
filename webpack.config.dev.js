var path = require('path');
var webpack = require('webpack');
var lost = require('lost');
var rucksack = require('rucksack-css');
var precss = require('precss');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/boardy'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.css$/, 
      include: path.join(__dirname, 'client'),
      loaders: ['style', 'css', 'postcss']
    },
    ]
  },
  postcss: function() {
    return [
      lost,
      rucksack({autoprefixer: true}),
      precss
    ];
  }
};
