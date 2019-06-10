import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import Card from '../../Card'
import '../index.css'
import ServiceDiv from '../../ServicePanel';
import NavCourse from '../../NavbarCourse';
import * as routes from '../../../constants/routes';

class CoursesMathsPage extends Component {
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
      <div>
          <NavCourse></NavCourse>
          <div className="coursesHeader">หมวดคณิตศาสตร์</div>
          <div className="rowCourse" id="test2">
            <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/math1-1.jpg" tutor="P'จวบ" courseName="คณิตศาสตร์ 1" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
            <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/math1-1.jpg" tutor="P'จวบ" courseName="คณิตศาสตร์ 1 part 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
            <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/math2.jpg" tutor="P'จวบ" courseName="คณิตศาสตร์ 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a> 
            <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/math2.jpg" tutor="P'จวบ" courseName="คณิตศาสตร์ 2 part 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a> 
          </div>
        <hr></hr>
        <ServiceDiv />
        <hr></hr>
      </div>
    );

  }
}



export default compose(
  inject('sessionStore'),
  observer
)(CoursesMathsPage);