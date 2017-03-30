import React, { Component, PropTypes } from 'react';

import styles from '../assets/css/index.css';

class Root extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.example}>Welcome to App</h1>
        {this.props.children}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;
