import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import Card from '../Card'
import './index.css'
import CourseBtn from '../CourseBtn'
import CarouselCard from '../Carousel'
import * as routes from '../../constants/routes';
import { Redirect } from 'react-router-dom'
import ServiceDiv from '../ServicePanel'
//import withAuthorization from '../Session/withAuthorization';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path : null,
      redirect: false
     };
  }
  setRedirect(path) {
    this.setState({
      path: path
    })
  }
  componentDidMount() {
  }
  renderRedirect = () => {
    if (this.state.path === 'allcourse') {
      return <Redirect to={routes.COURSES} />
    }
    else if(this.state.path === 'math1') {
      return <Redirect to={routes.MATH1} />
    }
    else if(this.state.path === 'math2') {
      return <Redirect to={routes.MATH2} />
    }
    else if(this.state.path === 'futureDetail') {
      return <Redirect to={routes.FUTURE_COURSE} />
    }
    else if(this.state.path === 'physics1') {
      return <Redirect to={routes.PHY1} />
    }
    else if(this.state.path === 'english1') {
      return <Redirect to={routes.ENG1} />
    }
    else if(this.state.path === 'Ann') {
      return <Redirect to={routes.ANNCOUNCE1} />
    }
    else {
      return <Redirect to={routes.HOME} />
    }
  }
  render() {
    return (
      <div>
         {this.renderRedirect()}   
         {/* <Carousel 
              width={"100%"} autoplay>
              <CarouselCard imgUrl="../../images/bg04.jpg"></CarouselCard>
              <CarouselCard imgUrl="../../images/bg03.jpg"></CarouselCard>
              <CarouselCard imgUrl="../../images/bg05.jpg"></CarouselCard>
              <CarouselCard imgUrl="../../images/bg06.png"></CarouselCard>
         </Carousel>*/}
         <CarouselCard></CarouselCard>
          <ServiceDiv />
          <hr></hr>
          <div className="freeCourse" id="freeCourse">
              <div>
                <div className="jumbotron">
                  <div className="subJumbotron">
                    <img className="logofree" src={"../../images/logo_w_cut.png"} alt="freelogo"></img>   
                  </div>
                  <div className="subJumbotron">
                      <div className="freeHeader">ฟรีเนื้อหา!!</div>      
                      <div className="subDetailFreeCourse">   
                          สำหรับนักเรียนค่าย Alpha En Camp  
                          <div className="glyphicon glyphicon-cog"></div> 
                      </div>
                  </div> 
                  <div className="subJumbotron">
                  </div>
                  <div className="subJumbotron">
                      <br></br><br></br>
                      <div className="freeListCourse"><div className="glyphicon glyphicon-ok-sign"></div> รายชื่อคอร์สที่เปิดฟรี</div>
                      <ul>
                        <li><a href={routes.PHY1}>ฟิสิกส์ แรงและพลังงาน</a></li>
                      </ul>
                      <div className="hintFreeCourse">
                        วิธีการเข้าเรียนคือนำรหัสเข้าเรียนที่ได้ไปกรอกในช่องที่กำหนดให้
                      </div>
                  </div>
                </div>
               </div>
          </div>
          <hr></hr>
        <CourseBtn ></CourseBtn>
        <div className="rowCourse" id="test2">
          <div className="courseColumn" onClick={() => this.setRedirect('physics1')}><Card imgUrl="../../images/phy1-1.jpg" tutor="P'จวบ" courseName="ฟิสิกส์ 1" detail="แรงและพลังงาน" numVideo="N/A" numLession="N/A" price="ฟรี !!" /></div>
          <div className="courseColumn" onClick={() => this.setRedirect('futureDetail')}><Card imgUrl="../../images/math1-1.jpg" tutor="P'จวบ" courseName="คณิตศาสตร์ 1" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></div>
          <div className="courseColumn" onClick={() => this.setRedirect('futureDetail')}><Card imgUrl="../../images/eng1-1.jpg" tutor="P'จวบ" courseName="English 1" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></div>
          <div className="courseColumn" onClick={() => this.setRedirect('futureDetail')}><Card imgUrl="../../images/chem1-1.jpg" tutor="P'จวบ" courseName="เคมี 1" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></div>
          <div className="courseColumn" onClick={() => this.setRedirect('futureDetail')}><Card imgUrl="../../images/phy2.jpg" tutor="P'จวบ" courseName="ฟิสิกส์ 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></div>
          <div className="courseColumn" onClick={() => this.setRedirect('futureDetail')}><Card imgUrl="../../images/math2.jpg" tutor="P'จวบ" courseName="คณิตศาสตร์ 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></div>
          <div className="courseColumn" onClick={() => this.setRedirect('futureDetail')}><Card imgUrl="../../images/eng2.jpg" tutor="P'จวบ" courseName="English 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></div>
          <div className="courseColumn" onClick={() => this.setRedirect('futureDetail')}><Card imgUrl="../../images/chem2.jpg" tutor="P'จวบ" courseName="เคมี 2" detail="เร็วๆนี้" numVideo="N/A" numLession="N/A" price="N/A" /></div>   
        </div>
        <div className="allCourse">
          <button type="button" className="allCourseBtn" 
            onClick={() => this.setRedirect('allcourse')}
          >ค้นหาคอร์สเรียนทั้งหมดที่นี่ !!</button>
        </div>
      </div>
    );

  }
}


//const authCondition = (authUser) => !!authUser;

export default compose(
//  withAuthorization(authCondition),
  inject('sessionStore'),
  observer
)(HomePage);