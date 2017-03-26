import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    const { posts: { postsById, postsList }, usersById } = this.props;

    return (
      <div>
        {postsList.map((id, i) => {
          const post = postsById[id];
          const { author } = post;

          return (
            <div key={i}>
              <h1>{post.title}</h1>
              <p>by {usersById[author].username}</p>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.object,
  usersById: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
  usersById: state.data.users.usersById,
});

export default connect(mapStateToProps)(Posts);
