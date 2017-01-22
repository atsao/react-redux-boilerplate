// Production config
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {};

config.devtool = 'source-map';

config.output = {
  filename: '[name].[chunkhash].js',
};

config.plugins = [
  new ExtractTextPlugin({
    filename: 'styles.[chunkhash].css',
    allChunks: true,
  }),
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: true,
    },
    minimize: true,
    sourceMap: true,
  }),
];

module.exports = config;
