// Production config
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const cssLoaders = require('./cssLoaders');

const config = {};

config.mode = 'production';

config.devtool = 'source-map';

config.output = {
  filename: '[name].[chunkhash].js'
};

config.module = {
  rules: [
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [MiniCssExtractPlugin.loader].concat(cssLoaders)
    }
  ]
};

config.plugins = [
  new MiniCssExtractPlugin({
    filename: 'styles.[chunkhash].css',
    chunkFilename: '[id].css'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    })
  ],
  splitChunks: {
    chunks: 'all'
  }
};

config.stats = 'minimal';

module.exports = config;
