const cssLoaders = [
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

module.exports = cssLoaders;
