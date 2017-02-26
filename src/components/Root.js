import React, { Component, PropTypes } from 'react';

import '../assets/css/index.css';

class Root extends Component {
  render () {
    return (
      <div className="wrapper">
        <h1 className="example">Welcome to App</h1>
        {this.props.children}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
}

export default Root;
