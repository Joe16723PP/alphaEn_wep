import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import './index.css';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';
import EmailVerification from '../EmailVerifacation';
import { auth } from '../../firebase';

const URL = "https://api.alphaenthailand.com/isv";
const URL2 ="https://api.alphaenthailand.com/define/byemail"

const accountPage = ({sessionStore}) =>
  <div>
    <AccDetail email={sessionStore.authUser.email} uid={sessionStore.authUser.uid} infostatus={false}></AccDetail>
  </div>


class AccDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail : this.props.email,
      userUid : this.props.uid,
      name:"",
      age:"",
      phone:"",
      pa_phone:"",
      address:"",
      showDetail : true,
      verifeidEmail : false,
      emailAndPass : false,
      registeredCourse : false,
      emailStatus : auth.doEmailVerificationStatus(),
      isInvalid : false,
      data: [],
      updateStudent:[],
      userInformationStatus: false,
      userInformation : [],
      getInfoStatus : false,
      initinfoStatus : this.props.infostatus,
      courseUser : [],
      statusCourseUser : null,
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit (evt) {
    fetch("https://api.alphaenthailand.com/update/student", 
            {
              method : 'post',
              headers: {
                'Accept' : 'application/json',
                'Content-Type':'application/json'},
              body : JSON.stringify({
                uid : this.state.userUid,
                std_name : this.state.name,
                email : this.state.userEmail,
                age : this.state.age,
                phone : this.state.phone,
                pa_phone : this.state.pa_phone,
                address : this.state.address,
              })
            })
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  initinfoStatus : true,
                  updateStudent: result.Data
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
            alert('ข้อมูลของ : ' + this.state.userEmail + " ถูกอัพเดทแล้ว");
            evt.preventDefault();
  }

  componentDidMount() {
    this.insertUidandEmail();
    this.getINFO();
    this.getCourseUser();
  }
  getCourseUser = () =>{
    fetch("https://api.alphaenthailand.com/user/checkcode", 
      {
        method : 'post',
        headers: {
          'Accept' : 'application/json',
          'Content-Type':'application/json'},
        body : JSON.stringify({
          uid : this.state.userUid
        })
      })
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        courseUser: result.Data,
        statusCourseUser : result.checkcode.status,
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

  getINFO = () => {
    if(this.state.emailStatus === true) {
      fetch(URL2, 
        {
          method : 'post',
          headers: {
            'Accept' : 'application/json',
            'Content-Type':'application/json'},
          body : JSON.stringify({
            email : this.state.userEmail
          })
        })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          userInformationStatus: true,
          getInfoStatus : true,
          userInformation: result.Data,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
    }
  }

  insertUidandEmail() {
    if(this.state.emailStatus === true) {
      fetch(URL, 
        {
          method : 'post',
          headers: {'Content-Type':'application/json'},
          body : JSON.stringify({
            email : this.state.userEmail,
            uid: this.state.userUid,
          })
        })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          initinfoStatus : true,
          data: result.Data
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
  }

  showAcc() {
    this.setState({
      showDetail : true,
      verifeidEmail : false,
      emailAndPass : false,
      courses : false,
    });
  }

  showVerEmail() {
    this.setState({
      showDetail : false,
      verifeidEmail : true,
      emailAndPass : false,
      courses : false,
    });
  }

  showEmailandPass() {
    this.setState({
      showDetail : false ,
      verifeidEmail : false,
      emailAndPass : true,
      courses : false,
    })
  }
  showCourses() {
    this.setState({
      showDetail : false ,
      verifeidEmail : false,
      emailAndPass : false,
      courses : true,
    })
  }

  changeState = (status) => {
    if (status === false) {
      alert("คุณยังไม่ได้ทำการยืนยันตัวตน กรุณายืนยันตัวตนก่อนที่จะแก้ไขข้อมูล @alpheEnThailand.com")
    }
  }

  null() {

  }
  render() {
    const initInfo = this.state.userInformation;
    var userCoures = this.state.courseUser;
    var statusCourseUser = this.state.statusCourseUser;
    var statusCourse = false;
    var Status = null;
    if (this.state.updateStudent.length !== 0) {
      window.location.reload();
    }
    if (statusCourseUser === "Success"){
      statusCourse = true;
    }
    else if (statusCourseUser === "Fail"){
      statusCourse = false;
    }

    if (this.state.emailStatus === true){
      Status = false;
    }
    else if (this.state.emailStatus === false){
      Status = true;
    }
    return(
      <div className="accPage">
        <div className="tabAcc">
            <button className="tablinks" onClick={() => this.showAcc()}><img className="imgTabAcc" alt='icon' src={"../../images/icon/people-8x.png"}/> ข้อมูลส่วนตัว</button>
            <button className="tablinks" onClick={() => this.showVerEmail()}><img className="imgTabAcc" alt='icon' src={"../../images/icon/task-8x.png"}/>การยืนยันตัวตน</button>
            <button className="tablinks" onClick={() => this.showEmailandPass()}><img className="imgTabAcc" alt='icon' src={"../../images/icon/cog-8x.png"}/>แก้ไขข้อมูล</button>
            <button className="tablinks" onClick={() => this.showCourses()}><img className="imgTabAcc" alt='icon' src={"../../images/icon/spreadsheet-8x.png"}/>คอร์สเรียนของฉัน</button>
        </div>
        <div>
        <div>
               {
                this.state.showDetail?
                <div className="accDetail">
                  <div className="topicAcc">ข้อมูลส่วนตัว</div>
                  <hr></hr>
                  <div className="subAccDetail">
                    <table className="tableInAccount">
                      <tr>
                        <td><img className="imgTabAcc" alt='icon' src={"../../images/icon/envelope-closed-8x.png"}/> อีเมล</td>
                        <td>{this.state.userEmail}</td>
                      </tr>
                      <tr>
                        <td><img className="imgTabAcc" alt='icon' src={"../../images/icon/person-8x.png"}/> ชื่อ-สกุล</td>
                        <td>
                          {
                            this.state.userInformationStatus?
                            <div>{initInfo[0].std_name}</div>
                            :<div>N/A</div> 
                          }
                        </td>
                      </tr>
                      <tr>
                        <td><img className="imgTabAcc" alt='icon' src={"../../images/icon/graph-8x.png"}/> อายุ</td>
                        <td>                          
                        {
                            this.state.userInformationStatus?
                            <div>{initInfo[0].age}</div>
                            :<div>N/A</div> 
                          }
                          </td>
                      </tr>
                      <tr>
                        <td><img className="imgTabAcc" alt='icon' src={"../../images/icon/phone-8x.png"}/> เบอร์ติดต่อ</td>
                        <td>                          {
                            this.state.userInformationStatus?
                            <div>{initInfo[0].phone}</div>
                            :<div>N/A</div> 
                          }</td>
                      </tr>
                      <tr>
                        <td><img className="imgTabAcc" alt='icon' src={"../../images/icon/home-8x.png"}/> เบอร์ผู้ปกครอง</td>
                        <td>                          {
                            this.state.userInformationStatus?
                            <div>{initInfo[0].pa_phone}</div>
                            :<div>N/A</div> 
                          }</td>
                      </tr>
                      <tr>
                        <td><img className="imgTabAcc" alt='icon' src={"../../images/icon/location-8x.png"}/> ที่อยู่</td>
                        <td>                          {
                            this.state.userInformationStatus?
                            <div>{initInfo[0].address}</div>
                            :<div>N/A</div> 
                          }</td>
                      </tr>
                    </table>
                  </div>
                  <div>**หมายเหตุ** ข้อมูลที่ว่างหมายถึงท่านยังไม่ได้กรอกข้อมูลส่วนตัวกรุณาแก้ไขที่ "แก้ไขข้อมูล"</div>
                </div>
                :null
               }
               {
                this.state.verifeidEmail? 
                <div className="accDetail">
                    <EmailVerification /> 
                </div>
                :null
               }

              {
                this.state.emailAndPass?
                  <div className="accDetail">
                  {this.changeState(this.state.emailStatus)}
                  <form onSubmit={this.handleSubmit}>
              <div className="userCon">
                  <div className="topicAcc">แก้ไขข้อมูลส่วนตัว</div>
                  <hr />
                  <label ><b><img className="imgTabAcc" alt='icon' src={"../../images/icon/person-8x.png"}/>ชื่อ-สกุล</b></label>
                  <input className="userInput" type="text" placeholder="Ex : นายใจรัก วิศวกรรมศาสตร์" 
                    name="name"
                    onChange={this.handleChange}
                    required />
                   <label><b><img className="imgTabAcc" alt='icon' src={"../../images/icon/graph-8x.png"}/>อายุ</b></label>
                  <input className="userInput" type="text" placeholder="Ex : 18" 
                    name="age"
                    onChange={this.handleChange}
                    required />
                  
                  <label ><b><img className="imgTabAcc" alt='icon' src={"../../images/icon/phone-8x.png"}/>เบอร์โทรศัพท์</b></label>
                  <input className="userInput" type="tel" placeholder="Ex : 0812345678" 
                    name="phone"
                    onChange={this.handleChange}
                    required />

                  <label ><b><img className="imgTabAcc" alt='icon' src={"../../images/icon/home-8x.png"}/>เบอร์ติดต่อผู้ปกครอง *ไม่จำเป็น</b></label>
                  <input className="userInput" type="tel" placeholder="Ex : 0812345678" 
                    name="pa_phone"
                    onChange={this.handleChange}
                   />

                  <label><b><img className="imgTabAcc" alt='icon' src={"../../images/icon/location-8x.png"}/>ที่อยู่</b></label>
                  <input className="userInput" type="text" placeholder="บ้านเลขที่ หมู่บ้าน ตำบล ถนน(ถ้ามี) อำเภอ จังหวัด รหัสไปรษณีย์" 
                    name="address"
                    onChange={this.handleChange}
                    required />
                
                  <h3 id="checkCorrect">*กรุณาตรวจสอบข้อมูลของท่านให้ถูกต้องก่อนกดยืนยัน</h3>

                  <div className="submitUserBtn">
                  <input type="submit" disabled={Status} className="smtUserBtn" value="update"></input>
                  </div>
              </div>
            </form>
            <hr></hr>
                    <div>รีเซตรหัสผ่าน</div>
                    <PasswordForgetForm />
                    <hr></hr>
                    <div>เปลี่ยนแปลงรหัสผ่าน</div>
                    <PasswordChangeForm />
                  </div>
                :null
               }
              {
                this.state.courses?
                  <div className="accDetail">
                    {
                      statusCourse?
                        <div>
                          <div>คอร์สเรียนทั้งหมด</div>
                          <ul>
                          {
                            userCoures.map(item => (
                            <li>
                                {item.cos_name}
                            </li>
                            ))
                          }
                          </ul>
                        </div>
                      :<div>คุณยังไม่มีคอร์สเรียนที่สมัคร</div>
                    }
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
)(accountPage);