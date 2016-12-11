const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'client/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'eslint',
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'server'),
        ],
      },
    ],
    loaders: [
      {
        test:  /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel',
        ],
        include: path.resolve(__dirname, 'client'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    fallback: path.resolve('./node_modules'),
    extensions: [
      '',
      '.js',
      '.json',
    ],
  },
};
