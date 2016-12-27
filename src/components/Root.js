import React, { Component } from 'react';

import '../assets/css/index.css';

class Root extends Component {
  render () {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default Root;
