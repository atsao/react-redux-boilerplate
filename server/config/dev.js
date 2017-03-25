const path = require('path');

const webpack = require('webpack');
const morgan = require('morgan');

const config = require('../../webpack.config');
const compiler = webpack(config);

const dev = app => {
  app.use(morgan('tiny'));
  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath,
      noInfo: true,
      quiet: false,
      hot: true,
      stats: { colors: true },
      watchOptions: { ignored: /node_modules/ },
      historyApiFallback: true,
    })
  );
  app.use(require('webpack-hot-middleware')(compiler));
  app.use('*', (req, res, next) => {
    let entry = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(entry, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
};

module.exports = dev;
