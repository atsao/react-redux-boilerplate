import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.css';

export class Nav extends Component {
  render() {
    return (
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
    );
  }
}

export default Nav;
