const faker = require('faker');

const samplePosts = [];

const generatePosts = () => {
  for (let i = 0; i < 5; i++) {
    let post = {
      id: faker.random.uuid(),
      post_date: faker.date.past(),
      title: faker.lorem.words(Math.floor(Math.random() * 5)),
      author: {
        id: faker.random.uuid(),
        username: faker.internet.userName(),
      },
      body: faker.lorem.paragraph(),
      tags: faker.lorem.words().split(' '),
      comments: [],
    }

    for (let j = 0; j < Math.floor(Math.random() * 4); j++) {
      let comment = {
        id: faker.random.uuid(),
        comment: faker.lorem.sentence(),
        user: {
          id: faker.random.uuid(),
          username: faker.internet.userName(),
        },
        post_date: faker.date.recent(),
      }
      post.comments.push(comment);
    }
    samplePosts.push(post);
  }
}

generatePosts();

module.exports = samplePosts;
