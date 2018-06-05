const faker = require('faker');

const samplePosts = [];

const generatePosts = () => {
  for (let i = 0; i < 5; i++) {
    let post = {
      id: faker.random.uuid(),
      postDate: faker.date.past(),
      title: faker.lorem.words(Math.ceil(Math.random() * 5)),
      author: {
        id: faker.random.uuid(),
        username: faker.internet.userName()
      },
      body: faker.lorem.paragraph(),
      tags: faker.lorem.words().split(' '),
      comments: []
    };

    for (let j = 0; j < Math.floor(Math.random() * 4); j++) {
      let comment = {
        id: faker.random.uuid(),
        comment: faker.lorem.sentence(),
        user: {
          id: faker.random.uuid(),
          username: faker.internet.userName()
        },
        postDate: faker.date.recent()
      };
      post.comments.push(comment);
    }
    samplePosts.push(post);
  }
  samplePosts.sort(
    (a, b) => +(a.postDate < b.postDate) || +(a.postDate === b.postDate) - 1
  );
};

generatePosts();

module.exports = samplePosts;
