import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import { auth } from '../../firebase';
import './index.css';
import * as routes from '../../constants/routes';
import 'node_modules/../bootstrap/dist/css/bootstrap.min.css';

const Navigation = ({ sessionStore }) =>
  <div>
    {sessionStore.authUser
      ?<NavigationAuth  user = {sessionStore.authUser.email} uid = {sessionStore.authUser.uid}/>
      :<NavigationNonAuth user = {'ลงชื่อเข้าใช้'}/>
    }
  </div>



class NavigationAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:this.props.user,
      uid:this.props.uid,
      adminUid : 'JRNViSNfW2OQS9Km2AeprGygpAE2',
      dropdown : false,
      windowSize :window.matchMedia("(max-width: 850px)"),
    }
  }
  showDropdown = () => {
    if (this.state.dropdown === false) {
      this.setState({
        dropdown:true,
      })
    }else if (this.state.dropdown === true) {
      this.setState({
        dropdown:false,
      })
    }
  }
  signOut = () => {
    auth.doSignOut();
    window.location.reload();
  }
  render() {
    var admin = false;
    if (this.state.adminUid === this.state.uid){
      admin = true;
    }
    if (this.state.windowSize.matches){
      return (
        <div>
           <nav className="navbar navbar-expand-sm navbar-custom">
            <a className="navbar-brand" href="/">
                <img src={'../../images/logo_w_cut.png'} alt="logo" ></img>
              </a>
              <span className="ml-auto">    
                <div className="dropdown">
                  <button className="dropbtn" onClick={() => this.showDropdown()}> <span className="glyphicon glyphicon-list"></span></button>
                  {
                    this.state.dropdown?
                      <div className="dropdown-content">
                        <a className="nav-link" href={routes.ACCOUNT}><span className="glyphicon glyphicon-user"/>{this.state.user}</a>
                        <a className="nav-link" href="/"><span className="glyphicon glyphicon-home"/>หน้าหลัก</a>
                        <a className="nav-link" href="/Tutors"><span className="glyphicon glyphicon-education"/>ติวเตอร์</a>
                        <a className="nav-link" href="/allstar"><span className="glyphicon glyphicon-certificate"/>ผลงานนักเรียนของเรา</a>
                        <a className="nav-link" href={routes.STORE}><span className="glyphicon glyphicon-shopping-cart"/>ตะกร้าสินค้า</a>
                        <a className="nav-link" href={routes.ACCOUNT}><span className="glyphicon glyphicon-cog"/>ตัวเลือก</a>
                        {
                          admin?
                          <a className="nav-link" href={routes.ADMIN}><span className="glyphicon glyphicon-cog"/>ระบบ Admin</a>
                          :null
                        }
                        <button className="logoutBtn" onClick={() => this.signOut()}><span className="glyphicon glyphicon-off"/>ออกจากระบบ</button>
                      </div>
                    :null
                  }
                </div>
              </span>
            </nav>
        </div>
      );
    }
    else {
      return(
        <div>
          <nav className="navbar navbar-expand-sm navbar-custom">
            <a className="navbar-brand" href="/">
              <img src={'../../images/logo_w_cut.png'} alt="logo" ></img>
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">หน้าหลัก</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Tutors">ติวเตอร์</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/allstar">ผลงานนักเรียนของเรา</a>
              </li>
            </ul>
            <span className="ml-auto navbar-text">    
              <ul className="navbar-nav">
                    {
                      admin?
                      <li className="nav-item">
                        <a className="nav-link" href={routes.ADMIN}>
                        <span className="glyphicon glyphicon-cog"/> ระบบ Admin</a>
                      </li>
                      :null
                    }
                  <li className="nav-item">
                    <a className="nav-link" href={routes.STORE}>
                      <img src={'../../images/icon/cart-8x.png'} alt='cart' /> ตะกร้าสินค้า</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={routes.ACCOUNT}>
                      <img src={'../../images/icon/person-8x.png'} alt='profile' /> {this.state.user}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => this.signOut()}><img src={'../../images/icon/pencil-8x.png'} alt='loginIcon' /> ออกจากระบบ</a>
                </li>
              </ul>
            </span>
          </nav>
        </div>
      );
    }
  }
}


class NavigationNonAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:this.props.user,
      dropdown : false,
    }
  }
  showDropdown = () => {
    if (this.state.dropdown === false) {
      this.setState({
        dropdown:true,
      })
    }else if (this.state.dropdown === true) {
      this.setState({
        dropdown:false,
      })
    }
  }
  render() {
    var x = window.matchMedia("(max-width: 850px)");
    if (x.matches){
      return (
        <div>
           <nav className="navbar navbar-expand-sm navbar-custom">
            <a className="navbar-brand" href="/">
                <img src={'../../images/logo_w_cut.png'} alt="logo" ></img>
              </a>
              <span className="ml-auto">    
                <div className="dropdown">
                  <button className="dropbtn" onClick={() => this.showDropdown()}> <span className="glyphicon glyphicon-list"></span></button>
                  {
                    this.state.dropdown?
                      <div className="dropdown-content">
                        <a className="nav-link" href="/"><span className="glyphicon glyphicon-home"/>หน้าหลัก</a>
                        <a className="nav-link" href="/Tutors"><span className="glyphicon glyphicon-education"/>ติวเตอร์</a>
                        <a className="nav-link" href="/allstar"><span className="glyphicon glyphicon-certificate"/>ผลงานนักเรียนของเรา</a>
                        <a className="nav-link" href={routes.STORE}><span className="glyphicon glyphicon-shopping-cart"/>ตะกร้าสินค้า</a>
                        <a className="nav-link" href={routes.SIGN_IN}><span className="glyphicon glyphicon-log-in"/>{this.state.user}</a>
                        <a className="nav-link" href={routes.SIGN_UP}><span className="glyphicon glyphicon-pencil"/>สมัครสมาชิก</a>
                      </div>
                    :null
                  }
                </div>
              </span>
            </nav>
        </div>
      );
    }
    else {
    return (
      <div>
            <nav className="navbar navbar-expand-sm navbar-custom">
              <a className="navbar-brand" href="/">
              <img src={'../../images/logo_w_cut.png'} alt="logo" to={routes.HOME}></img>
              </a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">หน้าหลัก</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Tutors">ติวเตอร์</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/allstar">ผลงานนักเรียนของเรา</a>
                </li>
              </ul>
              <span className="ml-auto navbar-text">    
                <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href={routes.STORE}>
                    <img src={'../../images/icon/cart-8x.png'} alt='cart' /> ตะกร้าสินค้า</a>
                </li>
                    <li className="nav-item">
                      <a className="nav-link" href={routes.SIGN_IN}>
                        <img src={'../../images/icon/person-8x.png'} alt='loginIcon' /> {this.state.user}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={routes.SIGN_UP}><img src={'../../images/icon/pencil-8x.png'} alt='loginIcon' /> สมัครสมาชิก</a>
                    </li>
                </ul>
              </span>
            </nav>
          </div>
    );
  }
  }
}

  export default compose(
    inject('sessionStore'),
    observer
  )(Navigation);