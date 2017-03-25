module.exports = {
  plugins: [
    require('postcss-import')({
      path: 'src/assets/css/src',
    }),
    require('autoprefixer'),
  ],
};
