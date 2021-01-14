import React from 'react';
import './navbar.sass';

import Container from '../container/container.jsx';

const NavbarLink = props => {
  return <a href={props.href} className="navbar__link">{props.text}</a>
};

const Navbar = props => {
  return <nav className="navbar">
    <Container content={
      <div className='navbar-wrap'>
        <NavbarLink href='#' text='works'/>
        <NavbarLink href='#' text='about'/>
        <NavbarLink href='#' text='services'/>
        <NavbarLink href='#' text='blog'/>
        <NavbarLink href='#' text='contact'/>
      </div>
    }/>
  </nav>
};

export default Navbar;