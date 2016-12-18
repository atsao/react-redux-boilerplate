const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const autoprefixer = require('autoprefixer');

const env = process.env.NODE_ENV || "development";

const resolvePath = relativePath => path.resolve(__dirname, relativePath);

const paths = {
  nodeModulesPath: resolvePath('node_modules'),
  app: {
    src: resolvePath('src'),
    srcIndex: resolvePath('src/index.js'),
    srcHtml: resolvePath('src/index.html'),
    build: resolvePath('build'),
    public: resolvePath('public'),
  },
  publicPath: '/',
};

const config = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    paths.app.srcIndex,
  ],
  output: {
    path: paths.app.build,
    filename: 'bundle.js',
    publicPath: paths.publicPath,
    contentBase: paths.app.public,
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'eslint',
        include: paths.app.src,
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
        include: paths.app.src,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        exclude: null,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.app.srcHtml,
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new ProgressBarPlugin({ clear: false }),
  ],
  resolve: {
    fallback: paths.nodeModulesPath,
    extensions: [
      '',
      '.js',
      '.json',
    ],
  },
  postcss: () => {
    return [
      autoprefixer,
    ];
  },
};

module.exports = config;
