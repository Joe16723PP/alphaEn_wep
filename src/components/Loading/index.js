import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import './index.css'
import * as routes from '../../constants/routes';
import { Redirect } from 'react-router-dom'
import withAuthorization from '../Session/withAuthorization';
import { trace } from 'mobx';
const authCondition = (authUser) => !!authUser;

const LoadingPage = ({sessionStore}) =>
  <div>
    <Loading email={sessionStore.authUser.email} uid={sessionStore.authUser.uid} ></Loading>
  </div>

class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : this.props.email,
            uid : this.props.uid,
            isv:false,
        }
    }
    componentDidMount(){
        fetch("https://api.alphaenthailand.com/isv", 
          {
            method : 'post',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({
              email : this.state.email,
              uid: this.state.uid,
            })
          })
          .then(
            (result) => {
              this.setState({
                isv: true,
              });
            })
    }
    render(){
        if (this.state.isv === true){
            return(
                <Redirect to={routes.VERIFICATION} />
            )
        }
        else {
            return(<div className="loaderComponent">
            <div className="loader"></div>
        </div>);
        }
    }
}

export default compose(
    withAuthorization(authCondition),
    inject('sessionStore'),
    observer
  )(LoadingPage);