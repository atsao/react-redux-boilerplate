import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Actions as PostsActions } from '../../redux/Posts';

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
    this.renderTags = this.renderTags.bind(this);
  }

  componentDidMount() {
    const { fetchPosts } = this.props;

    fetchPosts();
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

  render() {
    const { postsById, postIds } = this.props;

    return (
      <div className={styles['posts-container']}>
        <h1>Recent Posts</h1>
        {postIds.map((id, i) => {
          const { title, author, postDate, body, tags } = postsById[id] || {};
          const { username } = author || {};

          return (
            <div key={i} className={styles.post}>
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
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func,
  postIds: PropTypes.array,
  postsById: PropTypes.object
};

Posts.defaultProps = {
  fetchPosts: () => {},
  postIds: [],
  postsById: {}
};

const mapStateToProps = (state, ownProps) => ({
  postIds: state.posts.allIds,
  postsById: state.posts.byId
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(PostsActions.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
