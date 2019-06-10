import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { render } from "react-dom";
import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import ContactBar from '../ContactBar';
import './index.css';
import FutureAnnc from '../FutureAnnc';
import FutureCourse from '../FutureCourse';
import Announce1 from '../AnnouncePage';
import Math1 from '../Courses/Maths/Math1'
import Math2 from '../Courses/Maths/Math2'
import Physics1Page from '../Courses/Sciences/Phy1';
import Eng1 from '../Courses/Englishes/Eng1';
import AdminPage from '../Admin';
import VerificationPage from '../Verification';
import StorePage from '../Store';
import CoursesPage from '../Courses/';
import CoursesEngPage from '../Courses/Englishes';
import CoursesMathsPage from '../Courses/Maths';
import CoursesSciPage from '../Courses/Sciences';
import LoadingPage from '../Loading'
const App = () =>
  <BrowserRouter>
    <div className="app">
      <Navigation />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.FUTURE_COURSE} component={() => <FutureCourse />} />
      <Route exact path={routes.FUTURE_ANNOUNCE} component={() => <FutureAnnc />} />
      <Route exact path={routes.ANNCOUNCE1} component={() => <Announce1 />} />
      <Route exact path={routes.MATH1} component={() => <Math1 />} />
      <Route exact path={routes.MATH2} component={() => <Math2 />} />
      <Route exact path={routes.ENG1} component={() => <Eng1 />} />
      <Route exact path={routes.PHY1} component={() => <Physics1Page />} />
      <Route exact path={routes.ADMIN} component={() => <AdminPage />} />
      <Route exact path={routes.VERIFICATION} component={() => <VerificationPage />} />
      <Route exact path={routes.STORE} component={() => <StorePage />} />
      <Route exact path={routes.COURSES} component={() => <CoursesPage />} />
      <Route exact path={routes.MATHS} component={() => <CoursesMathsPage />} />
      <Route exact path={routes.ENGS} component={() => <CoursesEngPage />} />
      <Route exact path={routes.SCIENCE} component={() => <CoursesSciPage />} />
      <Route exact path={routes.LOADING} component={() => <LoadingPage />} />
      <ContactBar ></ContactBar>
    </div>
  </BrowserRouter>
export default withAuthentication(App);