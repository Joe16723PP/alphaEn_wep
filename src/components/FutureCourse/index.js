import React, { Component } from 'react';
import './index.css';
//import withAuthorization from '../Session/withAuthorization';
import * as routes from '../../constants/routes';

export default class FutureCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val : null
     };
  }

  render() {
    return (
      <div className="noDetail">
          <div className="sub">
          <h1>
              <p>ขออภัยในความไม่สะดวก
              เนื้อหาในหัวข้อนี้ยังไม่ถูกนำมาแสดง
              กรุณาตรวจสอบในภายหลัง @Alpha En Thailand</p>

              <p>
                We are very sorry for the inconvenience.
                This content has been disturbed.
                Please comeback later. @Alpha En Thailand
              </p>
          </h1>
          <br></br>
          <br></br>
          <a href={routes.HOME}><h1>กลับสู่หน้าหลัก</h1></a>
          </div>
      </div>
    );

  }
}
