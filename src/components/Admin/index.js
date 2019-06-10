import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import './index.css';
import withAuthorization from '../Session/withAuthorization';

const AdminPage = ({sessionStore}) =>
  <div>
    <AdminContainer email={sessionStore.authUser.email} uid={sessionStore.authUser.uid}></AdminContainer>
  </div>

class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail : false,
      admin_uid : "JRNViSNfW2OQS9Km2AeprGygpAE2",
      uid : this.props.uid,
     };
  }

  componentDidMount() {

  }


  showCoure= () =>{
      if(this.state.showDetail === false) {
        this.setState({
            showDetail:true,
        })
      }
      else if (this.state.showDetail === true) {
        this.setState({
            showDetail:false,
        })
    }
  }
  render() {      
    if (this.state.admin_uid === this.state.uid){
      return (
        <div className="adminPanel">
          <h1>Admin All Courses</h1>
          <div id="table">
              <table className="adminTable">
                  <tr>
                      <th id="ลำดับ">ลำดับ</th>
                      <th id="ชื่อคอร์ส">ชื่อคอร์ส</th>
                      <th id="รายวิชา">รายวิชา</th>
                      <th id="รายละเอียด">รายละเอียด</th>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>ฟิสิกส์ 1 แรงและพลังงาน</td>
                      <td id="td_รายวิชา">ฟิสิกส์</td>
                      <td><button onClick={()=> this.showCoure()}>รายละเอียด</button></td>
                  </tr>
              </table>
              <br></br><br></br><br></br><br></br>
          </div>
          {
              this.state.showDetail?
              <Test course_id='phy012018'></Test>
              :null
          }
          <br></br><br></br><br></br><br></br>
        </div>
      );
    }
    else {
      return(
        <h1>
          คุณไม่มีสิทธิ์ในการเข้าถึงเนื้อหาส่วนนี้ @alphaenthailand
        </h1>
      );
    }

  }
}

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showDetail : true,
          course_id: this.props.course_id,
          data:[],
          unUseCode : [],
          trigger:false,
         };
      }
      componentDidMount(){
        this.callGetUserApi()
        this.callGetCodeApi()
      }
      callGetUserApi = () => {
        fetch("https://api.alphaenthailand.com/search/course", 
        {
          method : 'post',
          headers: {
            'Accept' : 'application/json',
            'Content-Type':'application/json'},
          body : JSON.stringify({
            cos_id : this.state.course_id,
          })
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              data: result.Data
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
      }

      callGetCodeApi = () => {
        fetch("https://api.alphaenthailand.com/findcode/unused", 
        {
          method : 'post',
          headers: {
            'Accept' : 'application/json',
            'Content-Type':'application/json'},
          body : JSON.stringify({
            cos_id : this.state.course_id,
          })
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              trigger : true,
              unUseCode: result.Data
            });
          },
          (error) => {
            this.setState({
              trigger : false,
              error
            });
          }
        )
      }
      render() {
          var result = this.state.data;
          const unused = this.state.unUseCode;
          return (
            <div>
                <hr></hr>
                <h1>จำนวนนักเรียนในคอร์สนี้ : {result.length}</h1>
                <table className="adminTable">
                <tr>
                    <th id="index">ลำดับ</th>
                    <th id="name">ชื่อ-สกุล</th>
                    <th id="phone">เบอร์โทรศัพท์</th>
                    <th id="email">อีเมล</th>
                    <th id="addr">ที่อยู่</th>
                </tr>
        
                {
                    result.map((item,index) => (
                     <tr>
                        <td>{index+1}</td>
                        <td>{item.std_name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>

                    </tr>
                    ))
                }
                </table>
                <hr></hr>
                <div className="codeIncourse">
                    <div className="numberCourse">รหัสที่ยังไม่ถูกใช้เหลืออยู่ : {unused.length}</div>
                </div>
                <br></br><br></br>
                <div className="gridCode">  
                {
                  this.state.trigger?
                  unused.map((item,index) => (
                    <div className="code">
                      <p>{item.code}</p>
                    </div>
                  ))
                  :null
                }
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
)(AdminPage);