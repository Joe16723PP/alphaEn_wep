import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import './index.css'
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { Redirect } from 'react-router-dom'
import withAuthorization from '../Session/withAuthorization';
const authCondition = (authUser) => !!authUser;

const VerificationPage = ({sessionStore}) =>
  <div>
    <Verification email={sessionStore.authUser.email} uid={sessionStore.authUser.uid} ></Verification>
  </div>

class Verification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trigger : 0,
            email : this.props.email,
            uid : this.props.uid,
            name:"",
            phone:"",
            address:"",
            isLoaded:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit (evt) {
        auth.doEmailVerification()
        fetch("https://api.alphaenthailand.com/update/student", 
                {
                  method : 'post',
                  headers: {
                    'Accept' : 'application/json',
                    'Content-Type':'application/json'},
                  body : JSON.stringify({
                    uid : this.state.uid,
                    email : this.state.email,
                    std_name : this.state.name,
                    phone : this.state.phone,
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
                      isLoaded: false,
                      error
                    });
                  }
                )
                alert("ระบบทำได้ทำการส่งอีเมลสำหรับการยืนยันตัวตนแล้ว กรุณาตรวจสอบอีเมลของท่านเพื่อยืนยันตัวตน @alphaenthailand.com")
                evt.preventDefault();
      }
    
    render(){
        if(this.state.isLoaded === true){
            return <Redirect to={routes.HOME}></Redirect>
        }
        return(
            <div className="verification">
                <img className="logo" src={'../../images/logo_red.png'} alt="logo" ></img>

                <form onSubmit={this.handleSubmit}>
              <div className="userCon">
                  <div className="headerInitUser">email : {this.state.email}<br></br> ยังไม่มีข้อมูลในระบบ กรุณากรอกข้อมูลที่จำเป็นด้านล่าง</div>
                  <hr />
                  <input className="InitInput" type="text" placeholder="ชื่อ-สกุล : นายใจรัก วิศวกรรมศาสตร์" 
                    name="name"
                    onChange={this.handleChange}
                    required />
                  <input className="InitInput" type="tel" placeholder="เบอร์ติดต่อ : 0812345678" 
                    name="phone"
                    onChange={this.handleChange}
                    required />
                  <input className="InitInput" type="text" placeholder="ที่อยู่ : บ้านเลขที่ หมู่บ้าน ตำบล ถนน(ถ้ามี) อำเภอ จังหวัด รหัสไปรษณีย์" 
                    name="address"
                    onChange={this.handleChange}
                    required />
                
                  <h3 id="checkCorrect">*กรุณาตรวจสอบข้อมูลของท่านให้ถูกต้องก่อนกดยืนยัน</h3>

                  <div className="submitUserBtn">
                  <input className="emailVerBtn" type="submit"value="อัพเดทข้อมูล" ></input>
                  </div>
                  <div className="footerText">
                    <h3>ขอบคุณสำหรับความไว้วางใจต่อเรา @alphaenthailand.com</h3>
                </div>
              </div>
            </form>
            </div>
        );
    }
}

export default compose(
    withAuthorization(authCondition),
    inject('sessionStore'),
    observer
  )(VerificationPage);