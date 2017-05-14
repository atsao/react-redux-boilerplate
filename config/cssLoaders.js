const identName = process.env.NODE_ENV !== 'production'
  ? '[path][name]__[local]___[hash:base64:5]'
  : '[hash:base64:5]';

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      modules: true,
      localIdentName: identName,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      config: {
        path: 'postcss.config.js',
      },
    },
  },
];

module.exports = cssLoaders;
