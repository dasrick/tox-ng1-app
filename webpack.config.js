'use strict';

// modules /////////////////////////////////////////////////////////////////////////////////////////////////////////////
var webpack = require('webpack');
var path = require('path');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// pathes //////////////////////////////////////////////////////////////////////////////////////////////////////////////
var srcPath = path.resolve(__dirname, 'src', 'app.js');
var dstPath = path.resolve(__dirname, 'web', 'js');

// vars ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var nodeEnv = process.env.NODE_ENV || 'development';
//var apiUrl = process.env.apiUrl || '';

// the base config /////////////////////////////////////////////////////////////////////////////////////////////////////
var config = {
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      //{
      //  test: /\.less$/,
      //  loader: 'style-loader!css-loader!postcss-loader?pack=cleaner!less-loader'
      //  //loader: 'style/useable!css?sourceMap!autoprefixer?browsers=last 2 version!less-loader?sourceMap=true'
      ////},
      //
      //},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader?pack=cleaner')
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader?pack=cleaner!less-loader')
      }
    ]
  },
  postcss: function () {
    return {
      //defaults: [autoprefixer, precss],
      defaults: [autoprefixer({ browsers: ['last 2 version'] })],
      cleaner:  [autoprefixer({ browsers: ['last 2 version'] })]
    };
  },
  plugins: [
    new ExtractTextPlugin('../css/style.min.css', {
      allChunks: true
    }),

    new NgAnnotatePlugin({add: true}),
    new webpack.optimize.UglifyJsPlugin(
      {compress: {warnings: false}}
    ),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),

    new CopyWebpackPlugin([
      // copy font awesome
      {
        from: path.resolve(__dirname, 'node_modules', 'font-awesome', 'fonts'),
        to: path.resolve(__dirname, '..', 'fonts'),
        toType: 'file'
      },
      {
        from: path.resolve(__dirname, 'node_modules', 'font-awesome', 'css'),
        to: path.resolve(__dirname, '..', 'css'),
        toType: 'file'
      },
      // copy bootstrap - js not ness, just include angular-ui-bootstrap
      {
        from: path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist', 'fonts'),
        to: path.resolve(__dirname, '..', 'fonts'),
        toType: 'file'
      },
      {
        from: path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist', 'css'),
        to: path.resolve(__dirname, '..', 'css'),
        toType: 'file'
      //},
      //{
      //  from: path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist', 'js'),
      //  to: path.resolve(__dirname, '..', 'js'),
      //  toType: 'file'
      }
    ])

  ]
};

// environment switch //////////////////////////////////////////////////////////////////////////////////////////////////
switch (nodeEnv) {
  case 'development':
  case 'test':
    config.devtool = 'source-map';
    break;
  case 'staging':
    config.devtool = 'cheap-module-source-map';
    break;
  case 'production':
    config.devtool = 'cheap-module-source-map';
    break;
  default:
    console.error('No task for environment:', nodeEnv);
    process.exit(1);
}

module.exports = config;
