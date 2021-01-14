import React from 'react';
import './navbar.sass';

const NavbarLink = props => {
  return <a href={props.href} className="navbar__link">{props.text}</a>
};

const Navbar = props => {
  return <nav className="navbar">
    <NavbarLink href='#' text='works'/>
    <NavbarLink href='#' text='about'/>
    <NavbarLink href='#' text='services'/>
    <NavbarLink href='#' text='blog'/>
    <NavbarLink href='#' text='contact'/>
  </nav>
};

export default Navbar;