import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import Card from '../../Card'
import '../index.css'
import ServiceDiv from '../../ServicePanel';
import NavCourse from '../../NavbarCourse';
import * as routes from '../../../constants/routes';

class CoursesEngPage extends Component {
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
          <div className="coursesHeader">หมวดภาษาต่างประเทศ</div>
            <div className="rowCourse" id="test2">
              <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/eng1-1.jpg" tutor="P'จวบ" courseName="English 1" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
              <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/eng1-1.jpg" tutor="P'จวบ" courseName="English 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
              <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/eng2.jpg" tutor="P'จวบ" courseName="English 3" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
              <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/eng2.jpg" tutor="P'จวบ" courseName="English 4" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
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
)(CoursesEngPage);