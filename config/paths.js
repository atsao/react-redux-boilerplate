const path = require('path');

const resolvePath = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
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
