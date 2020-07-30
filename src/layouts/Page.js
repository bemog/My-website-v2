import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
        <Route path='/about' component={AboutPage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  )
}

export default Page;