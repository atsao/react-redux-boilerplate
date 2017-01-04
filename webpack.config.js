const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const autoprefixer = require('autoprefixer');

const env = process.env.NODE_ENV || 'development';

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

let cssLoaders = 'css?sourceMap!postcss';

let config = {
  devtool: 'eval',
  entry: [paths.app.srcIndex],
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
        loader: env === 'development' ? `style!${cssLoaders}` : ExtractTextPlugin.extract('style', cssLoaders),
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|svg|ttf|woff|woff2)$/i,
        loader: 'file',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.app.srcHtml,
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ],
  resolve: {
    fallback: paths.nodeModulesPath,
    modulesDirectories: [
      'node_modules',
    ],
    root: [
      paths.app.src,
    ],
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

if (env === 'development') {
  config.entry.push('webpack-hot-middleware/client');
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ProgressBarPlugin({ clear: false })
  );
}

if (env === 'production') {
  config.devtool = 'source-map';
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    })
  );
}

module.exports = config;
