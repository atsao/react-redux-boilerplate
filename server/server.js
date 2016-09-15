var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var app = express();
var router = express.Router();
var port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));
app.use('/api', router);
require('./routes/routes.js')(router);

app.all('/*', function(req, res, next) {
  res.redirect('/');
});

app.listen(port, function() {
  console.log("App is listening on", port);
});

exports = module.exports = app;