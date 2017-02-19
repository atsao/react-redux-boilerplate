const merge = require('webpack-merge');

const baseConfig = require('./config/webpack.config.base');
const devConfig = require('./config/webpack.config.dev');
const prodConfig = require('./config/webpack.config.prod');

const TARGET = process.env.npm_lifecycle_event;

let config = {};

switch (TARGET) {
  case 'start': {
    config = merge.smart(baseConfig, devConfig);
    break;
  }

  default: {
    config = merge.smart(baseConfig, prodConfig);
    break;
  }
}

module.exports = config;
