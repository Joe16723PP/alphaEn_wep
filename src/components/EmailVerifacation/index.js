import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './index.css'
const EmailVerification = ({sessionStore}) =>
  <div>
    <EmailVerificationFrom email = {sessionStore.authUser.email} uid = {sessionStore.authUser.uid}></EmailVerificationFrom>
  </div>

class EmailVerificationFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: this.props.email,
      userUid : this.props.uid,
      emailStatus : auth.doEmailVerificationStatus(),
      isInvalid : false,
      data : null
     };
  }
componentDidMount() {
  if (this.state.emailStatus === true) {
    this.setState({ 
      emailStatus: 'ยืนยันเรียบร้อย',
      isInvalid : true
    })
  }
  else if(this.state.emailStatus === false){
      this.setState({
         emailStatus: 'ยังไม่ได้ทำการยืนยัน' ,
         isInvalid : false,
    })
  }
}
  onSubmit = (event) => {
    auth.doEmailVerification()
    alert('ขณะนี้ระบบทำการส่ง Email สำหรับการยืนยันตัวตนของท่านเรียบร้อยแล้ว.. กรุณาตรวจสอบ Email ของท่านเพื่อทำการยืนยัน')
    event.preventDefault();
  }
  
  reloadPage(){
    window.location.reload();
  }
  
  render() {  
    return (
      <div>
      <h2>สถานะการยืนยัน : {this.state.emailStatus}</h2>
      <form onSubmit={this.onSubmit}>
        <button 
        type="submit" className="emailVerBtn"
        >
          คลิกเพื่อยืนยันตัวตน
        </button>
      </form>
      <hr></hr>
      <h3>หากระบบยังไม่ทำการอัพเดทข้อมูลกรุณากดปุ่มด้านล่าง</h3>
      <button className="btn btn-success" onClick={() => this.reloadPage()}>ตรวจสอบสถานะ</button>
      </div>
    );
  }
}
export default compose(
  inject('sessionStore'),
  observer
)(EmailVerification);
