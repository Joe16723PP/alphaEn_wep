import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import Card from '../Card'
import './index.css'
import * as routes from '../../constants/routes';
import ServiceDiv from '../ServicePanel';
import NavCourse from '../NavbarCourse';

class CoursesPage extends Component {
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
          <div className="coursesHeader">คอร์สเรียนทั้งหมดของเรา</div>
        <div className="rowCourse" id="test2">
          <a className="linkCard" href={routes.PHY1}><Card imgUrl="../../images/phy1-1.jpg" tutor="P'จวบ" courseName="ฟิสิกส์ 1" detail="แรงและพลังงาน" numVideo="N/A" numLession="N/A" price="ฟรี !!" /></a>
          <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/math1-1.jpg" tutor="P'จวบ" courseName="คณิตศาสตร์ 1" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
          <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/eng1-1.jpg" tutor="P'จวบ" courseName="English 1" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
          <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/chem1-1.jpg" tutor="P'จวบ" courseName="เคมี 1" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
          <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/phy2.jpg" tutor="P'จวบ" courseName="ฟิสิกส์ 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
          <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/math2.jpg" tutor="P'จวบ" courseName="คณิตศาสตร์ 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
          <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/eng2.jpg" tutor="P'จวบ" courseName="English 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>
          <a className="linkCard" href={routes.FUTURE_COURSE}><Card imgUrl="../../images/chem2.jpg" tutor="P'จวบ" courseName="เคมี 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></a>   
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
)(CoursesPage);