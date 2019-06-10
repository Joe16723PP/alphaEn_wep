import React from 'react'
import './index.css'
import * as routes from '../../constants/routes';

class CourseBtn extends React.Component {
    render(){
        return(
            <div>
                <div className="grid">
                    <div className="grid-item">
                    <a href={routes.SCIENCE}>
                        <div className="imgContainer">
                            <img id="subj1" src={"../../images/subject/ODRAT80-1.jpg"} alt="Designed by Bedneyimages / Freepik" />
                            <div className="textInimg">
                                ฟิสิกส์ไม่ยากอย่างที่คิด
                            </div>
                            <span className="tooltiptext">Designed by Bedneyimages / Freepik</span>
                        </div>
                    </a>
                    </div>
                    <div className="grid-item">
                    <a href={routes.ENGS}>
                        <div className="imgContainer">
                            <img id="subj1" src={"../../images/subject/25060-1.jpg"} alt="Designed by rawpixel.com / Freepik" />
                            <div className="textInimg">
                                ภาษาต่างประเทศเพื่ออนาคต
                            </div>
                            <span className="tooltiptext">Designed by rawpixel.com / Freepik</span>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="grid">
                    <div className="grid-item">
                    <a href={routes.SCIENCE}>
                        <div className="imgContainer">
                            <img id="subj1" src={"../../images/subject/30453-1.jpg"} alt="Designed by rawpixel.com / Freepik"/>
                            <div className="textInimg">
                                เคมีพร้อมแนวคิด
                            </div>
                            <span className="tooltiptext">Designed by rawpixel.com / Freepik</span>
                        </div>
                    </a>
                    </div>
                    <div className="grid-item">
                    <a href={routes.MATHS}>
                        <div className="imgContainer">
                            <img id="subj1" src={"../../images/subject/3837-1.jpg"} alt="Designed by jcomp / Freepik" />
                            <div className="textInimg">
                                คณิตศาสตร์เป็นเรื่องสนุก
                            </div>
                            <span className="tooltiptext">Designed by jcomp / Freepik</span>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default CourseBtn;