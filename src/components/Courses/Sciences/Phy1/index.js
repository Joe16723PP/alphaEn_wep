import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import '../../index.css';
import { auth } from '../../../../firebase';
import withAuthorization from '../../../Session/withAuthorization';
import * as routes from '../../../../constants/routes';
import { Redirect } from 'react-router-dom'
import Iframe from 'react-iframe'
import TypeCourse from '../../../TypeCourse';

const Physics1Page = ({sessionStore}) =>
  <div>
    <Phy1 email={sessionStore.authUser.email} uid={sessionStore.authUser.uid}></Phy1>
  </div>

class Phy1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail : false,
      showTutors : false,
      showVideo : true,
      emailStatus : auth.doEmailVerificationStatus(),
      email : this.props.email,
      uid : this.props.uid,
      data : [],
      userInformation:[],
      course_id : "phy012018",
     };
  }

  componentDidMount() {
    fetch("https://api.alphaenthailand.com/userincos", 
            {
              method : 'post',
              headers: {
                'Accept' : 'application/json',
                'Content-Type':'application/json'},
              body : JSON.stringify({
                uid :this.state.uid,
                cos_id : this.state.course_id
              })
            })
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  initinfoStatus : true,
                  data: result.checkcode
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
  renderRedirect = () => {
    if (this.state.emailStatus === false) {
      alert("คุณยังไม่ทำการยืนยันตัวตนกรุณายืนยันตัวตนก่อน @Alpha En Thailand")
      return <Redirect to={routes.ACCOUNT} />
    }
    else if (this.state.emailStatus === true){
      fetch("https://api.alphaenthailand.com/isv", 
        {
          method : 'post',
          headers: {'Content-Type':'application/json'},
          body : JSON.stringify({
            email : this.state.email,
            uid: this.state.uid,
          })
        })
          .then(res => res.json())
          }
    }

  
  showTutors() {
    this.setState({
      showDetail : false ,
      showTutors : true,
      showVideo : false,
    })
  }

  render() {
    var Userstate = this.state.data;
    var showCourseVideo = false;
    if (Userstate.status === "Success"){
        showCourseVideo = true;  
    } else {
      showCourseVideo = false;
    }
    return (
      <div>
        {this.renderRedirect()}
        <div className="mainContainer">
        <TypeCourse></TypeCourse>
            <div className="subContainer">
             <div className="courseName">
                <div>
                  <div id="topic">ฟิสิกส์ 1</div> 
                  <p id='subtopic'>แรงและพลังงาน มีทั้งหมด 3 วิดีโอ , 1 บทเรียน</p>
                </div>
                <div className="logoCourse">
                  <img id="logoIncourse" src={'../../images/logo_w_cut.png'} alt="logo" ></img>
                </div>
                <br></br>
              </div>
              <br></br>
              <Payment price="0" numVideo="3" numLess="1" email={this.state.email} uid={this.state.uid}></Payment>
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
                  {
                    showCourseVideo?
                    <div>
                    <table className="tableInCourse">
                      <thead>
                        <tr>
                          <th>บทที่</th>
                          <th>ชื่อวิดีโอ</th>
                          <th>ความยาววิดีโอ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span className="glyphicon glyphicon-play-circle"></span> บทที่ 1</td>
                          <td><a target="_blank"  rel="noopener noreferrer" href="https://drive.google.com/file/d/1pn9fOmGR5LDh3dLlQTqjUNx5053_GCQ4/preview">ฟิสิกส์งานและพลังงาน 1</a></td>
                          <td>1 ชั่วโมง 10 นาที</td>
                        </tr>
                        <tr>
                          <td><span className="glyphicon glyphicon-play-circle"></span> บทที่ 2</td>
                          <td><a target="_blank"  rel="noopener noreferrer" href="https://drive.google.com/file/d/13o79WHDHJb7JVmIfcX_642UxXfBffmEs/preview">ฟิสิกส์งานและพลังงาน 2</a></td>
                          <td>1 ชั่วโมง 18 นาที</td>
                        </tr>
                        <tr>
                          <td><span className="glyphicon glyphicon-download"></span> เอกสาร</td>
                          <td><a target="_blank"  rel="noopener noreferrer" href="https://drive.google.com/file/d/1ZZjr6LCqHpxlkDOQc8XgT-xWoDMfB38u/preview">เอกสารเกี่ยวกับแรงและพลังงานดาวน์โหลดที่นี่</a></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                      {/*
                      <Iframe url="https://drive.google.com/file/d/1045StVpxQ1qxsQzj8ounValR_kpfV3tW/preview"
                          width="700px"
                          height="450px"
                          id="myId"
                          className="myClassname"
                          display="initial"
                          position="relative"
                          allowFullScreen/>*/
                        }
                  </div>
                    :<div>
                    <table className="tableInCourse">
                      <thead>
                        <tr>
                          <th>บทที่</th>
                          <th>ชื่อวิดีโอ</th>
                          <th>ความยาววิดีโอ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span className="glyphicon glyphicon-play-circle"></span> บทที่ 1</td>
                          <td>ฟิสิกส์งานและพลังงาน 1</td>
                          <td>1 ชั่วโมง 10 นาที</td>
                        </tr>
                        <tr>
                          <td><span className="glyphicon glyphicon-play-circle"></span> บทที่ 2</td>
                          <td>ฟิสิกส์งานและพลังงาน 2</td>
                          <td>1 ชั่วโมง 18 นาที</td>
                        </tr>
                        <tr>
                          <td><span className="glyphicon glyphicon-play-circle"></span> บทที่ 3</td>
                          <td>ฟิสิกส์งานและพลังงาน 3</td>
                          <td>1 ชั่วโมง 51 นาที</td>
                        </tr>
                        <tr>
                          <td><span className="glyphicon glyphicon-download"></span> เอกสาร</td>
                          <td>เอกสารเกี่ยวกับแรงและพลังงานดาวน์โหลดที่นี่</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                      {/*
                      <Iframe url="https://drive.google.com/file/d/1045StVpxQ1qxsQzj8ounValR_kpfV3tW/preview"
                          width="700px"
                          height="450px"
                          id="myId"
                          className="myClassname"
                          display="initial"
                          position="relative"
                          allowFullScreen/>*/
                        }
                        <br></br>
                        <h4>*เนื่องจากคุณยังไม่ลงทะเบียนรายวิชานี้ ทำให้ไม่สามารถเข้าชมเนื้อหาของบทเรียนได้</h4>
                  </div>
                  }
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

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price : this.props.price,
      numVideo : this.props.numVideo,
      numLess : this.props.numLess,
      name : this.props.name,
      open: false,
      uid : this.props.uid,
      email : this.props.email,
      activateCode : "null",
      data : [],
      userInformation : [],
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit = (evt) => {
    fetch("https://api.alphaenthailand.com/upcode", 
            {
              method : 'post',
              headers: {
                'Accept' : 'application/json',
                'Content-Type':'application/json'},
              body : JSON.stringify({
                uid : this.state.uid,
                code : this.state.activateCode,
                email : this.state.email
              })
            })
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  initinfoStatus : true,
                  data: result.upcode
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
            evt.preventDefault();
  }
  componentDidMount() {
    this.getUserInfo();
  }
  getUserInfo(){
    fetch("https://api.alphaenthailand.com/define/byemail", 
    {
        method : 'post',
        headers: {
          'Accept' : 'application/json',
          'Content-Type':'application/json'},
        body : JSON.stringify({
          uid : this.state.uid,
          email : this.state.email
        })
      })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          userInformation: result.Data[0].std_name,
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

  showActiveCode = () => {
    if (this.state.userInformation === null){     
      alert("ข้อมูลสำคัญของคุณยังไม่ถูกเก็บเข้าสู่ระบบ กรุณาอัพเดทข้อมูลของคุณที่หน้าบัญชีผู้ใช้")
    }
    else {
      this.setState({
        open : true,
      })
    }
  }

  render() {
    const isInvalid = this.state.activateCode.length !== 6;
    var result = this.state.data;
    if (result.status === "Fail"){
      alert("รหัสของท่านไม่ถูกต้องหรือถูกใช้งานแล้วกรุณาตรวจสอบอีกครั้ง @Alpha En Thailand")
      window.location.reload();
    }
    else if (result.status === "Success"){
      alert("การลงทะเบียนเสร็จสมบูรณ์ @Alpha En Thailand")
      window.location.reload();
    }
    return (
      <div className="paymentCon" style = {{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../../images/phy1-1.jpg)" }}>
        <div className="subPaymentCon">
          <div className="infoCon">
            <div className="info"> {this.state.numVideo} วิดีโอ | {this.state.numLess} บทเรียน | ดูซ้ำกี่รอบก็ได้ ไม่มีหมดอายุ </div>
          </div>
          <div className="priceCostCon">
            <div className="priceCost"> {this.state.price} บาท. ฟรีสำหรับนักเรียนของเรา </div>
          </div>
          
        </div>
        <div className="subPaymentCon">
          <div className="payBtnCon">
          <button type="button" className="btn btn-success" onClick={this.showActiveCode}>คลิกที่นี่เพื่อกรอกรหัสเข้าเรียน</button>
          {
            this.state.open?
            <div className="activeCode">
              <form onSubmit={this.handleSubmit}>
                <input type="text" className="activeCodeInput" placeholder="กรอกโค้ดที่นี่ : Activate Code here"
                name="activateCode"
                onChange={this.handleChange}
                ></input><br></br>
                <input type="submit" className="activeInput" disabled={isInvalid} value="สมัครเข้าเรียน"></input>
              </form>
            </div>
            :null
          }
          </div>
        </div>
      </div>
    );

  }
}

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('sessionStore'),
  observer
)(Physics1Page);