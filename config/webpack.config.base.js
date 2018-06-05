const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

let config = {};

config.entry = ['babel-polyfill', 'react-hot-loader/patch', paths.app.srcIndex];

config.output = {
  path: paths.app.build,
  publicPath: paths.publicPath
};

config.resolve = {
  modules: [paths.app.src, paths.nodeModules, 'node_modules'],
  extensions: ['.js', '.json']
};

config.module = {
  rules: [
    {
      test: /\.(js|jsx)?$/,
      enforce: 'pre',
      use: 'eslint-loader',
      include: paths.app.src
    },
    {
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
      include: paths.app.src
    }
  ]
};

config.plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.app.srcHtml
  })
];

module.exports = config;
