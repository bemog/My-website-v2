import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { name: 'home', path: '/', icon: 'fas fa-home', exact: true },
    { name: 'about', path: '/about', icon: 'fas fa-user-alt' },
    { name: 'projects', path: '/projects', icon: 'fas fa-briefcase' },
    { name: 'contact', path: '/contact', icon: 'fas fa-envelope' }
]

const Navigation = () => {
    const item = links.map(link => (
        <li className='navigation__item' key={link.name}>
            <NavLink to={link.path} exact={link.exact ? link.exact : false}>
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
                <div className='navigation__btn-line'></div>
                <div className='navigation__btn-line'></div>
                <div className='navigation__btn-line'></div>
            </div>
            <ul className='navigation__items-list'>
                {item}
            </ul>
        </div>
    )
}

export default Navigation;