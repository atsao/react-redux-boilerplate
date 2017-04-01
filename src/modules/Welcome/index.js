import React, { Component } from 'react';

import styles from './styles.css';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className={styles['welcome-text']}>
          <h3>Welcome</h3>
          <p>
            Thanks for using this boilerplate. You can see a demonstration of the techs used in this scaffold, such as sagas and routing. See an example route by clicking Posts above.
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
