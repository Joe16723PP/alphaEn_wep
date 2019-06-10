import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import './index.css';

class ServiceDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
     };
  }

  componentDidMount() {
  }
 render() {
    return (
        <div className="container-fluid text-center">
        <br/><br/><br/>
            <img id="Servicelogo" src={'../../images/logo_red.png'} alt="logo"></img>
            <br></br>
            <br></br>
            <br></br>
            <div className="serviceHeader">สานฝันให้กับคนที่มีความฝัน เส้นทางสู่การเป็น "วิศวกร"</div>
            <br/>
            <div className="rowService">
                <div className="col">
                    <div className="serviceImgDiv">
                        <img className="serviceImg" src={'../../images/service_img1.png'} alt="serviceImg" />
                    </div>
                    <div className="serviceDetail">เรียนรู้ได้ตลอดเวลา</div>
                    <div className="serviceSubDetail">จากการเข้าถึงได้ทุกที่ ทำให้คุณสามารถรับรู้และเข้าถึงเนื้อหาของบทเรียนได้ตลอดเวลา 24 ชั่วโมง</div>
                </div>
                <div className="col">
                    <div className="serviceImgDiv">
                        <img className="serviceImg" src={'../../images/service_img2.png'} alt="serviceImg" />
                    </div>  
                    <div className="serviceDetail">มีความยืดหยุ่นในการเรียน</div>
                    <div className="serviceSubDetail">คุณสามารถเลือกคอร์สตามที่ต้องการได้อย่างอิสระไม่มีกฎเกณฑ์ข้อบังคับใดๆทั้งสิ้น เลือกเรียนได้ตามความต้องการของคุณเอง</div>
                </div>
                <div className="col">
                    <div className="serviceImgDiv">
                        <img className="serviceImg" src={'../../images/service_img3.png'} alt="serviceImg" />
                    </div>
                    <div className="serviceDetail">กลับมาเรียนใหม่ได้ตลอดเวลา</div>
                    <div className="serviceSubDetail">สามารถเรียนรู้ได้ตลอดเวลา หากพบปัญหาตามไม่ทันเนื้อหา เรียนไม่ทัน หรือต้องการทบทวนความรู้ คุณทำได้ตลอด เนื้อหาของเราไม่มีหมดอายุ</div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>

    );

  }
}



export default compose(
  inject('userStore'),
  observer
)(ServiceDiv);