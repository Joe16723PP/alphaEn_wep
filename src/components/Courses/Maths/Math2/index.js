import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import '../../index.css';
//import withAuthorization from '../Session/withAuthorization';

class Math2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail : true,
      showTutors : false,
      showVideo : false,
     };
  }

  componentDidMount() {
  }

  showVideo() {
    this.setState({
      showDetail : false,
      showTutors : false,
      showVideo : true,
    });
  }

  showDetail() {
    this.setState({
      showDetail : true,
      showTutors : false,
      showVideo : false,
    });
  }

  showTutors() {
    this.setState({
      showDetail : false ,
      showTutors : true,
      showVideo : false,
    })
  }

  render() {
    return (
      <div>
        <div className="big">
            <div className="sub">
             <div className="courseName">
                <div>
                  <div id="topic">คณิตศาสตร์ 2</div> 
                  <p id='subtopic'>จำนวนวิดีโอและบทเรียน</p>
                </div>
                <div className="logoCourse">
                  <img id="logoIncourse" src={'../../images/logo_w_cut.png'} alt="logo" ></img>
                </div>
                <br></br>
              </div>
              <br></br>
              <img id='imgCourse' src={"../images/m2.png"} alt="img"></img>
              <p></p>
              <br></br>
              <div className="tab">
                <button className="tablinks" onClick={() => this.showDetail()}>รายละเอียดคอร์ส</button>
                <button className="tablinks" onClick={() => this.showVideo()}>วิดีโอ</button>
                <button className="tablinks" onClick={() => this.showTutors()}>ผู้สอน</button>
             </div>
             <div>
               {
                this.state.showDetail?
                <div className="courseDetail">
                  <p>รายละเอียดคอร์ส</p>
                </div>
                :null
               }
               {
                this.state.showTutors?
                <div className="tutorDetail">
                  <p>ประวัติผู้สอน</p>
                  <p>ข้อมูลผู้สอน</p>
                </div>
                :null
               }

              {
                this.state.showVideo?
                <div className="videoDetail">
                  <p>วิดีโอ</p>
                </div>
                :null
               }
             </div>
            </div>
        </div>
      </div>
    );

  }
}



export default compose(
  inject('userStore'),
  observer
)(Math2);