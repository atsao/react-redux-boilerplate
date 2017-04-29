import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './styles.css';

class Posts extends Component {
  _renderTags = tags =>
    tags.map((tag, i) => <span key={i} className={styles.tag}>{tag}</span>);

  _renderDate = date => {
    const month = moment(date).format('MMM');
    const day = moment(date).format('D');
    const year = moment(date).format('YYYY');

    return (
      <div className={styles['date-block']}>
        <div className={styles['date-month']}>
          {month}
        </div>
        <div className={styles['date-day']}>
          {day}
        </div>
        <div className={styles['date-year']}>
          {year}
        </div>
      </div>
    );
  };

  _renderPost = (id, key) => {
    const { posts: { postsById }, usersById } = this.props;
    const post = postsById[id];
    const { title, author, postDate, body, tags } = post;
    const { username } = usersById[author];

    return (
      <div key={key} className={styles.post}>
        <div className={styles['post-sidebar']}>
          {this._renderDate(postDate)}
        </div>
        <div className={styles['post-body']}>
          <h2>{title}</h2>
          <div className={styles['post-subtitle']}>
            <p>by {username}</p>
          </div>
          <p>{body}</p>
          <div>
            Tags: {this._renderTags(tags)}
          </div>
        </div>
      </div>
    );
  };
  render() {
    const { posts: { postsList } } = this.props;

    return (
      <div className={styles['posts-container']}>
        <h1>Recent Posts</h1>
        {postsList.map((id, i) => this._renderPost(id, i))}
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
