import React, { Component } from 'react';
import {Link,withRouter,} from 'react-router-dom';
//import { auth, db } from '../../firebase';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './index.css'
import { Redirect } from 'react-router-dom'

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  trigger: 0,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(() => {
      this.setState({
        trigger : 1,
        });
        history.push(routes.LOADING);
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
      passwordOne,
      passwordTwo,
      error,
      trigger,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

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
            <div className="card-signUp my-5">
              <div className="card-body">
                <img id="logo" src={'../../images/logo_red.png'} alt="logo" ></img>
                <br></br><br></br>
                <div className="card-title text-center">สมัครสมาชิก</div>
                <hr className="my-4"/>
                <form className="form-signUp" onSubmit={this.onSubmit}>
                <div className="form-label-group">
                <input
                  id="inputEmail" 
                  className="form-control"
                  value={email}
                  onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                  type="text"
                  placeholder="อีเมลแอดเดรส"
                />
                </div>
                <div className="form-label-group">
                <input
                  id="inputPassword" 
                  className="form-control"
                  value={passwordOne}
                  pattern=".{8,}"
                  onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                  type="password"
                  placeholder="รหัสผ่านอย่างน้อย 8 ตัว"
                />
                </div>
                <div className="form-label-group">
                <input
                  id="inputPassword2" 
                  className="form-control"
                  value={passwordTwo}
                  onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                  type="password"
                  placeholder="ยืนยันรหัสผ่าน"
                />
                </div>
                <button
                className="btn btn-lg btn-primary btn-block text-uppercase" 
                id="RegisBtn" 
                disabled={isInvalid} 
                type="submit">
                  สมัครสมาชิก
                </button>
                <br></br>
                { error && <p className="errMessage">!!อีเมลนี้ถูกใช้งานแล้วกรุณาตรวจสอบอีกครั้ง</p> }
                <a href="/"><p id="homeLink">Home</p></a>
                </form>
                  </div>
                  </div>
                </div>

    );
  }
}
}

const SignUpLink = () =>
  <p>
    ยังไม่มีบัญชีผู้ใช้งาน?
    {' '}
    <Link to={routes.SIGN_UP}>สมัครสมาชิก</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};