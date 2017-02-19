// Development config
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const cssLoaders = require('./cssLoaders');

let config = {};

config.devtool = 'eval';

config.entry = ['webpack-hot-middleware/client'];

config.output = {
  filename: '[name].js',
};

config.module = {
  rules: [
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        ...cssLoaders,
      ],
    },
  ],
}

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
