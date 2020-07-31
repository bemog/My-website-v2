import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Navigation.scss';

const links = [
  { name: 'Home', path: '/', icon: 'fas fa-home', exact: true },
  { name: 'About', path: '/about', icon: 'fas fa-user-alt' },
  { name: 'Projects', path: '/projects', icon: 'fas fa-briefcase' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
]

const Navigation = (props) => {
  const item = links.map(link => (
    <li className='navigation__item' key={link.name}>
      <NavLink className='navigation__item-link' to={link.path} exact={link.exact ? link.exact : false}>
        <span>
          <i className={link.icon}></i>
          <span className='navigation__item-title'>{link.name}</span>
        </span>
      </NavLink>
    </li>
  ))

  // Show/hide navigation menu
  let navigationClasses = [];
  let menuBtnClasses = [];
  let logoClasses = [];
  if (props.showMenu) {
    navigationClasses = ['navigation__items-list-container navigation__items-list-container--show'];
    menuBtnClasses = ['navigation__menu-btn navigation__menu-btn--close'];
    logoClasses = ['navigation__logo navigation__logo--move'];
  } else {
    navigationClasses = ['navigation__items-list-container'];
    menuBtnClasses = ['navigation__menu-btn'];
    logoClasses = ['navigation__logo'];
  }

  return (
    <div className='navigation'>
      <div className={logoClasses}>
        <span className='navigation__logo mark'>BM</span>
      </div>
      <div className={menuBtnClasses} onClick={props.clicked}>
        <div className='navigation__menu-btn-line'></div>
        <div className='navigation__menu-btn-line'></div>
        <div className='navigation__menu-btn-line'></div>
      </div>
      <div className={navigationClasses}>
        <ul className='navigation__items-list'>
          {item}
        </ul>
      </div>
    </div>
  )
}

export default Navigation;