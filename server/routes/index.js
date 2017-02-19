const samplePosts = require('../sample-data');

module.exports = (app) => {
  app.route('/healthcheck').get((req, res) => {
    res.send('OK');
  });

  app.route('/posts').get((req, res) => {
    res.status(200).json(samplePosts);
  });
}
