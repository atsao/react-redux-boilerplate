import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {

  render () {
    const { posts: { postsById, postsList } } = this.props;

    return (
      <div>
        {postsList.map((id, i) => (<h1 key={ i }>{postsById[id].title}</h1>))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts,
});

export default connect(mapStateToProps)(Posts);
