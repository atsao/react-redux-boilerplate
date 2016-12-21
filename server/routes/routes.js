module.exports = (app) => {
  app.route('/healthcheck').get((req, res) => {
    res.send('OK');
  });
}
