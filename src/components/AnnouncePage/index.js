import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import { auth } from '../../firebase';
import './index.css';
import * as routes from '../../constants/routes';

const URL = "https://localhost:7777/select";

class Announce1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        error: null,
        isLoaded: false,
        student: []
    }
  }
  
  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          student: result.Data
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render() {
    const { error, isLoaded, student } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="body">
            <h1>รายชื่อนักเรียนค่ายประจำวันที่ xx/xx/xxxx</h1>
            {student.map(item => (
              <div>
              <h3>ชื่อ : {item.std_name}</h3>
              <h3>Email : {item.email}</h3>
              </div>
            ))
            }
        </div>
      );
    }
  }
}

  export default compose(
    inject('sessionStore'),
    observer
  )(Announce1);