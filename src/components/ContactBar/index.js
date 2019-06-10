import React from 'react'
import './index.css'
class ContactBar extends React.Component {
    render() {
        return(
            <div>
            <footer>
                <div className="Section">
                    <div className="rowContactBar">
                        <div className="column">
                            <a href="/" ><img id="logo" src={'../../images/logo_w_cut.png'} alt="logo"></img></a>
                            <p>คอร์สเรียน · หนังสือ · ติวเตอร์ · สินค้า</p>
                            <p id="content">Alpha En Thailand © 2018</p>
                        </div>
                        <div className="column">
                            <div className="element">
                                <div className="rowE">
                                    <img src={'../../images/icon/LO-ICON.png'} alt="location" /> 
                                    <p id="content">707/28 หมู่บ้านอิงมอ ต.ศิลา อ.เมืองขอนแก่น จ.ขอนแก่น</p>
                                </div>
                                 
                            </div>
                            <div className="element">
                                <div className="rowE">
                                    <img src={'../../images/icon/PHONE-ICON.png'} alt="phone" /> 
                                    <p id="content">085-121-6512 (พี่จวบ)</p>
                                </div>
                                
                            </div>
                            <div className="element">
                                <div className="rowE">
                                    <img src={'../../images/icon/MAIL-ICON.png'} alt="email" />
                                    <p id="content">alphaen1234@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="Topic">เกี่ยวกับเรา</div>
                            <div className="Detail">
                                <p id="content">สานฝันให้กับคนที่มีความฝัน เส้นทางสู่การเป็น "วิศวกร"</p>
                            </div>
                            <div className="Social">
                                <a href="https://www.facebook.com/ALPHA-En-1681379355205829/"><img src={'../../images/icon/FB-ICON.png'} alt="FB" /></a>
                                <a href="https://www.instagram.com/alphaenthailand/"><img src={'../../images/icon/IG-ICON.png'} alt="IG" /></a>
                                <img href="" src={'../../images/icon/LINE-ICON.png'} alt="LINE" />
                            </div>
                        </div>
                    </div>
                </div>
		    </footer>
                <div className="copyRight">
                    <p>©Copyright 2018 Alpha En Thailand. All rights reserved.</p>
                </div>
            </div>

        );
    }
}
export default ContactBar;