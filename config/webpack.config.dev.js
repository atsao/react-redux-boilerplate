// Development config
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

let config = {};

config.devtool = 'eval';

config.entry = ['webpack-hot-middleware/client'];

config.output = {
  filename: '[name].js',
};

config.plugins = [
  new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ProgressBarPlugin({ clear: false }),
]

module.exports = config;
