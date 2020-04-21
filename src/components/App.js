import React from 'react';
import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <ToastContainer autoclose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-too" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
