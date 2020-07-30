import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Navigation.scss';

const links = [
  { name: 'Home', path: '/', icon: 'fas fa-home', exact: true },
  { name: 'About', path: '/about', icon: 'fas fa-user-alt' },
  { name: 'Projects', path: '/projects', icon: 'fas fa-briefcase' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
]

const Navigation = () => {
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
  return (
    <div className='navigation'>
      <div className='navigation__logo'>
        <span className='navigation__logo-mark'>BM</span>
      </div>
      <div className='navigation__menu-btn'>
        <div className='navigation__menu-btn-line'></div>
        <div className='navigation__menu-btn-line'></div>
        <div className='navigation__menu-btn-line'></div>
      </div>
      <div className='navigation__items-list-container'>
        <ul className='navigation__items-list'>
          {item}
        </ul>
      </div>
    </div>
  )
}

export default Navigation;