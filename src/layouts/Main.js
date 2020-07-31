import React from 'react';
import { Route, Switch } from "react-router-dom";
import '../scss/Main.scss';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
  return (
    <div className='main'>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact component={AboutPage} />
        <Route path='/projects' exact component={ProjectsPage} />
        <Route path='/contact' exact component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  )
}

export default Page;