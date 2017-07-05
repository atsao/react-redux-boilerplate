// Production config
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaders = require('./cssLoaders');

let config = {};

config.devtool = 'source-map';

config.output = {
  filename: '[name].[chunkhash].js',
};

config.module = {
  rules: [
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: cssLoaders,
      }),
    },
  ],
};

config.plugins = [
  new ExtractTextPlugin({
    filename: 'styles.[chunkhash].css',
    allChunks: true,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
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
  new webpack.optimize.ModuleConcatenationPlugin(),
];

module.exports = config;
