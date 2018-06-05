import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.css';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

class Posts extends Component {
  constructor(props) {
    super(props);

    this.renderDate = this.renderDate.bind(this);
    this.renderPost = this.renderPost.bind(this);
    this.renderTags = this.renderTags.bind(this);
  }

  renderTags(tags) {
    return tags.map((tag, i) => (
      <span key={i} className={styles.tag}>
        {tag}
      </span>
    ));
  }

  renderDate(date) {
    const parsedDate = new Date(date);
    const month = parsedDate.getMonth();
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();

    return (
      <div className={styles['date-block']}>
        <div className={styles['date-month']}>
          {month >= 0 && monthNames[month].substr(0, 3)}
        </div>
        <div className={styles['date-day']}>{day}</div>
        <div className={styles['date-year']}>{year}</div>
      </div>
    );
  }

  renderPost(id, key) {
    const { postsById, usersById } = this.props;
    const post = postsById[id];
    const { title, author, postDate, body, tags } = post || {};
    const { username } = usersById[author] || {};

    return (
      <div key={key} className={styles.post}>
        <div className={styles['post-sidebar']}>
          {this.renderDate(postDate)}
        </div>
        <div className={styles['post-body']}>
          <h2>{title}</h2>
          <div className={styles['post-subtitle']}>
            <p>by {username}</p>
          </div>
          <p>{body}</p>
          {tags && <div>Tags: {this.renderTags(tags)}</div>}
        </div>
      </div>
    );
  }

  render() {
    const { posts } = this.props;

    return (
      <div className={styles['posts-container']}>
        <h1>Recent Posts</h1>
        {posts.map((id, i) => this.renderPost(id, i))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  postsById: PropTypes.object,
  usersById: PropTypes.object
};

Posts.defaultProps = {
  posts: [],
  postsById: {},
  usersById: {}
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.data.posts.allIds,
  postsById: state.data.posts.byId,
  usersById: state.data.users.byId
});

export default connect(mapStateToProps)(Posts);
