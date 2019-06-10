import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import './index.css'
import * as routes from '../../constants/routes';
import { Redirect } from 'react-router-dom'

class TypeCourse extends Component {
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
        <div className="vertical-menu">
            <div className="active"><span className="glyphicon glyphicon-list-alt"></span> รายวิชา</div>
            <a href="/"><span className="glyphicon glyphicon-arrow-right"></span>  course 1</a>
            <a href="/"><span className="glyphicon glyphicon-arrow-right"></span>  course 2</a>
            <a href="/"><span className="glyphicon glyphicon-arrow-right"></span>  course 3</a>
            <a href="/"><span className="glyphicon glyphicon-arrow-right"></span>  course 4</a>
            <a href="/"><span className="glyphicon glyphicon-arrow-right"></span>  course 5</a>
            <a href="/"><span className="glyphicon glyphicon-arrow-right"></span>  course 6</a>
            <a href="/"><span className="glyphicon glyphicon-arrow-right"></span>  course 7</a>
        </div>

    );

  }
}


export default compose(
  inject('userStore'),
  observer
)(TypeCourse);