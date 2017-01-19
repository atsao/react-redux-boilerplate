const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

const env = process.env.NODE_ENV || 'development';

const resolvePath = relativePath => path.resolve(__dirname, relativePath);

const paths = {
  nodeModules: resolvePath('node_modules'),
  app: {
    src: resolvePath('src'),
    srcIndex: resolvePath('src/index.js'),
    srcHtml: resolvePath('src/index.html'),
    build: resolvePath('build'),
    public: resolvePath('public'),
  },
  publicPath: '/',
};

let cssLoaders = [
  'css-loader?sourceMap&importLoaders=1',
  {
    loader: 'postcss-loader',
    options: {
      config: path.resolve(__dirname, 'postcss.config.js'),
    },
  },
];

let config = {};

config.entry = [paths.app.srcIndex];

config.output = {
  path: paths.app.build,
  filename: 'bundle.js',
  publicPath: paths.publicPath,
  // contentBase: paths.app.public,
};

config.resolve = {
  modules: [
    paths.app.src,
    paths.nodeModules,
    'node_modules',
  ],
  extensions: [
    '.js',
    '.json',
  ],
};

config.module = {
  rules: [
    {
      test: /\.(js|jsx)?$/,
      enforce: 'pre',
      use: 'eslint-loader',
      include: paths.app.src,
    },
    {
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: [
        'react-hot-loader',
        'babel-loader',
      ],
      include: paths.app.src,
    },
    {
      test: /\.css$/,
      use: env === 'development' ? ['style-loader'].concat(cssLoaders) : ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: cssLoaders,
      }),
    },
  ],
};

config.plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.app.srcHtml,
  }),
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
  }),
];

if (env === 'development') {
  config.devtool = 'eval';
  config.entry.push('webpack-hot-middleware/client');
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: true,
      },
      minimize: true,
      sourceMap: true,
    })
  );
}

module.exports = config;
