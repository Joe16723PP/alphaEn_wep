import React from 'react';
import './index.css';

class Announce extends React.Component {
    constructor(props){
        super(props)
        this.state={
          imgUrl: this.props.imgUrl,
          detail : this.props.detail
        }
      }
    render(){
        return (
                <div className="colAnnc">
                    <div id="anncImg">
                    <a href="/futureCourse">
                        <img src={this.state.imgUrl} alt="annc"/>
                        <p id="textAnnc">{this.state.detail}</p>
                    </a>
                    </div>
                </div>
            
        );
    }
}

export default Announce;

