import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Root.css';

class Root extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <h1 className={styles['main-header']}>
            react-redux-boilerplate
          </h1>
          <nav className={styles.nav}>
            <NavLink
              exact
              to="/"
              className={`${styles['btn']} ${styles['btn-ghost']}`}
              activeClassName={styles['selected']}
            >
              Home
            </NavLink>
            <NavLink
              to="/posts"
              className={`${styles['btn']} ${styles['btn-ghost']}`}
              activeClassName={styles['selected']}
            >
              Posts
            </NavLink>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;
