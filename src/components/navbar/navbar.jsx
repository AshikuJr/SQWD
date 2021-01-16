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
        <NavbarLink href='#about' text='about'/>
        <NavbarLink href='#services' text='services'/>
        <NavbarLink href='#works' text='works'/>
        <NavbarLink href='#team' text='team'/>
        <NavbarLink href='#contact' text='contact'/>
      </div>
    }/>
  </nav>
};

export default Navbar;