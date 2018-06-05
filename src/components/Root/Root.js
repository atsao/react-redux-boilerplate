import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from '../Nav';

import styles from './Root.css';
import '../../assets/css/index.css';

export class Root extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <h1 className={styles['main-header']}>react-redux-boilerplate</h1>
          <Nav />
        </div>
        {this.props.children}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node
};

Root.defaultProps = {
  children: null
};

export default Root;
