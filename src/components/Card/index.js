import React from 'react';
import './index.css';
import StarRatingComponent from 'react-star-rating-component';

class Card extends React.Component {
    constructor(props){
      super(props)
      this.state={
        imgUrl: this.props.imgUrl,
        tutor : this.props.tutor,
        courseName : this.props.courseName,
        detail : this.props.detail,
        numVideo : this.props.numVideo,
        numLession : this.props.numLession,
        price : this.props.price,
        rating: 4,
      }
    }
    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
    render() {
      const { rating } = this.state;
        return (
        <div className="card-course">
          <div id="contentImgCard">
            <img src={this.state.imgUrl} alt="pics" />
          </div>
          <div className="textInCard">
              <div className="topicCourse">{this.state.courseName}</div>
            <p>{this.state.detail}</p>
          <div className="tutor">Tutors : {this.state.tutor}</div>
          </div>
          <div className="textInCard">
            <div className="priceCourse">
            <div style={{fontSize: 24}}>
              <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={rating}
                starColor={"#ffb400"}
                emptyStarColor={"grey"}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
              {
                /*<div className="price">{this.state.price}</div>
              */}
            </div>
          </div>
        </div>
        );
    }
}

export default Card;