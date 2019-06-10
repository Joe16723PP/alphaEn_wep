import './index.css'
import React from 'react';

export default class UserInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
          uid: this.props.uid,
          email: this.props.email,
          name: '',
          age: '',
          phone:'',
          pa_phone:'',
          address:'',
          showDetail : true,
          error: null, };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
        }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }
      /*
      onSubmit = (event) => {
        alert(this.state.phone)
        fetch("https://api.alphaenthailand.com/update/student", 
          {
            method : 'post',
            headers: {
              'Accept' : 'application/json',
              'Content-Type':'application/json'},
            body : JSON.stringify({
                email : this.state.email,
                uid : this.state.uid,
                age : this.state.age,
                address : this.state.address,
                phone : this.state.phone,
                pa_phone : this.state.pa_phone,
                std_name : this.state.name
            })
          })
          event.preventDefault();
          */
      
      render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>ยังไม่สามารถใช้งานส่วนนี้ได้</div>
              <div className="userCon">
                  <div className="topicAcc">แก้ไขข้อมูลส่วนตัว</div>
                  <hr />
                  <label ><b><img className="imgTabAcc" alt='icon' src={"../images/icon/person-8x.png"}/>ชื่อ-สกุล</b></label>
                  <input className="userInput" type="text" placeholder="Ex : นายใจรัก วิศวกรรมศาสตร์" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    required />
                   <label><b><img className="imgTabAcc" alt='icon' src={"../images/icon/graph-8x.png"}/>อายุ</b></label>
                <input className="userInput" type="text" placeholder="Ex : 18 ปี" 
                  value={this.state.age}
                  onChange={this.handleChange}
                  required />
                
                <label ><b><img className="imgTabAcc" alt='icon' src={"../images/icon/phone-8x.png"}/>เบอร์โทรศัพท์</b></label>
                <input className="userInput" type="tel" placeholder="Ex : 0812345678" 
                  value={this.state.phone}
                  onChange={this.handleChange}
                  required />

                <label ><b><img className="imgTabAcc" alt='icon' src={"../images/icon/home-8x.png"}/>เบอร์ติดต่อผู้ปกครอง</b></label>
                <input className="userInput" type="tel" placeholder="Ex : 0812345678" 
                  value={this.state.pa_phone}
                  onChange={this.handleChange}
                  required />

                <label><b><img className="imgTabAcc" alt='icon' src={"../images/icon/location-8x.png"}/>ที่อยู่</b></label>
                <input className="userInput" type="text" placeholder="บ้านเลขที่ หมู่บ้าน ตำบล ถนน(ถ้ามี) อำเภอ จังหวัด รหัสไปรษณีย์" 
                  value={this.state.address}
                  onChange={this.handleChange}
                  required />
                
                  <h3 id="checkCorrect">*กรุณาตรวจสอบข้อมูลของท่านให้ถูกต้องก่อนกดยืนยัน</h3>

                  <div className="submitUserBtn">
                  <input type="submit" className="smtUserBtn" value="update"></input>
                  </div>
              </div>
            </form>
        );
    
      }
}
