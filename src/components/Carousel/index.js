import React from 'react';
import './index.css';
import * as routes from '../../constants/routes';
import { Redirect , Link } from 'react-router-dom'

class CarouselCard extends React.Component {
    constructor(props){
      super(props)
      this.state={
        imgUrl: "this.props.imgUrl",
        path : null,
        redirect: false
      }
    }
    setRedirect(path) {
        this.setState({
        path: path
        })
    }
    renderRedirect = () => {
        if (this.state.path === 'register') {
            return <Redirect to={routes.SIGN_UP} />
        }
    }

    render() {
        return (
            <div className="carouselCard">
            {this.renderRedirect()}
                <div className="heroImg" style = {{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../images/bg07.jpg)" }}>
                    <div className="textHeroImg">
                        <div className="fadingElement">
                            <div className="sin2018">- Since 2018 -</div>
                            <div className="HeaderCarousel">Alpha EN Thailand</div>
                            <div className="subHeaderCarousel">มาเป็นส่วนหนึ่งกับพวกเรา</div>
                            <br></br>
                            <button type="button" className="joinUsBtn" onClick={() => this.setRedirect('register')}>คลิกเพื่อสมัครสมาชิก</button>
                        </div>
                        <div className="detailHeroImg">
                            <div className="hrCarousel"></div>
                            <div className="griddetailHeroImg">
                                <div className="subGridDetailHeroImg">
                                    <div className="headerDetailHeroImg">เราคือใคร</div>
                                    <div className="subHeaderDetailHeroImg">เรามีคอร์สเรียนมากมายรอคุณอยู่ ทั้งวิชาพื้นฐานทั่วไปของมัธยมต้น หรือจะเป็นวิชาเฉพาะทางเช่น ฟิสิกส์ คณิตศาสตร์สำหรับวิศวกรรม</div>
                                </div>
                                <div className="subGridDetailHeroImg">
                                    <div className="headerDetailHeroImg">สิ่งที่คุณจะได้สัมผัส</div>
                                    <div className="subHeaderDetailHeroImg">คุณจะได้รับความรู้ที่สดใหม่อยู่เสมอ พร้อมกับความถูกต้องแม่นยำ และมีคุณภาพจากทีมงานที่มีคุณภาพ</div>
                                </div>
                                <div className="subGridDetailHeroImg">
                                    <div className="headerDetailHeroImg">พวกเราอยู่ที่ไหน</div>
                                    <div className="subHeaderDetailHeroImg">ในตอนนี้ทางเราได้มี "มหกรรมคว้าเกียร์สัญจร" โดยจะเป็นการเปิดค่าย Alphe En Camp On Tour ครั้งแรกของเราทั่วประเทศไทย</div>
                                </div>
                                <div className="subGridDetailHeroImg">
                                    <div className="headerDetailHeroImg">สนใจเรียนกับเรา</div>
                                    <div className="subHeaderDetailHeroImg">เราคือผู้ที่จะสานฝันให้กับคนที่มีความฝันสู่เส้นทางการเป็น "วิศวกร" ที่ดี</div>
                                   
                                </div>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div className="divBtnfreeCourse">
                            <a className="linkFreeCourse" href="#freeCourse">ดูคอร์สเรียนสำหรับนักเรียนของเรา</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselCard;