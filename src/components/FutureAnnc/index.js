import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
//import withAuthorization from '../Session/withAuthorization';

class FutureAnnc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val : null
     };
  }

  componentDidMount() {
  }
  render() {
    return (
      <div>
          No detail
      </div>
    );

  }
}



export default compose(
  inject('userStore'),
  observer
)(FutureAnnc);