const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const config = require('../webpack.config');

const app = express();
const compiler = webpack(config);
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '../client')));
app.use('/api', router);
require('./routes/routes.js')(router);

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, (err) => {
  if (err) return console.error(err);
  console.log('App is listening on', port);
});
