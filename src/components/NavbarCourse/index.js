import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import './index.css'
import * as routes from '../../constants/routes';
import { Redirect } from 'react-router-dom'

class NavCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path : null,
      redirect: false
     };
  }
  componentDidMount() {
  }
  render() {
    return (
        <div className="navCourse">
            <ul className="nav nav-tabs">
            <li><a href={routes.MATHS}>หมวดคณิตศาสตร์</a></li>
            <li><a href={routes.SCIENCE}>หมวดวิทยาศาสตร์</a></li>
            <li><a href={routes.ENGS}>หมวดภาษาต่างประเทศ</a></li>
            <li><a href={routes.COURSES}>คอร์สเรียนทั้งหมด</a></li>
            </ul>
        </div>
    );

  }
}


export default compose(
  inject('userStore'),
  observer
)(NavCourse);