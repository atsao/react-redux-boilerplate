const path = require('path');

const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('../webpack.config');

const app = express();
const compiler = webpack(config);
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  contentBase: config.output.contentBase,
  hot: true,
  quiet: false,
  stats: {
    colors: true,
  },
  noInfo: true,
  watchOptions: {
    ignored: /node_modules/,
  },
}));
app.use(require('webpack-hot-middleware')(compiler));

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.resolve(__dirname, 'dist')));
}

app.use('/api', router);
require('./routes/routes.js')(router);

app.all('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/dist/index.html'));
});

app.listen(port, (err) => {
  /* eslint-disable */
  if (err) return console.error(err);
  console.log('App is listening on', port);
  /* eslint-enable */
});

module.exports = app;
