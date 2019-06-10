import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './index.css'


const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  trigger: 0,
};

export class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    this.setState({
      trigger:1,
    })
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;
    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({
          error : error,
          trigger : 0,
          });
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
      trigger,
    } = this.state;
    if (trigger === 1) {
      return (
        <div className="loderComponent">
          <div className="loader"></div>
        </div>
      );
    }
    else {
      return (
        <div className="colcard">
          <div className="card-signin my-5">
            <div className="card-body">
              <img id="logo" src={'../../images/logo_red.png'} alt="logo" ></img>
              <br></br><br></br>
              <div className="card-title text-center">เข้าสู่ระบบ</div>
              <hr className="my-4"/>
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <div className="form-label-group">
                    <input 
                      type="email" 
                      id="inputEmail" 
                      className="form-control" 
                      placeholder="อีเมลแอดเดรส" 
                      onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                      required autoFocus />
                  </div>
                  <div className="form-label-group">
                    <input 
                      type="password"
                      id="inputPassword" 
                      onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                      className="form-control" 
                      placeholder="รหัสผ่าน" 
                      required/>
                   </div>
                  <button 
                    className="btn btn-lg btn-primary btn-block text-uppercase" 
                    type="submit" 
                    id="SignInBtn"
                    >ลงชื่อเข้าใช้
                  </button>
                  <div className="forgetPass">
                  <PasswordForgetLink />
                  <SignUpLink />
                  </div>
                  
                  { error && <p className="errMessage">!!อีเมลหรือรหัสผ่านไม่ถูกต้องกรุณาตรวจสอบอีกครั้ง</p> }
                  <hr className="my-4"/>
                  <a href="/"><p id="homeLink">Home</p></a>
                    </form>
                  </div>
                </div>
              </div>
    );
   }
  }
}

export default withRouter(SignInPage);