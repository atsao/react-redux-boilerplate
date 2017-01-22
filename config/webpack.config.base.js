const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = require('./paths');

let cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      localIdentName: '[path][name]__[local]___[hash:base64:5]',
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      config: 'postcss.config.js',
    },
  },
];

let config = {};

config.entry = [paths.app.srcIndex];

config.output = {
  path: paths.app.build,
  publicPath: paths.publicPath,
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
      exclude: /node_modules/,
      loaders: ExtractTextPlugin.extract({
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
]

module.exports = config;
