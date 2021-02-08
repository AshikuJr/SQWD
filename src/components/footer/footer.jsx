import React from 'react';
import './footer.sass';

import briefcase from './briefcase.svg';
import mail from './mail.svg';

import facebook from './facebook.svg';
import twitter from './twitter.svg';
import pinterest from './pinterest.svg';

const Footer = props => {
  return <footer className="footer" id='contact'>
    <div className="footer-work">
      <img src={briefcase} alt=""/>
      <span className="footer-title">Want to work together?</span>
      <span className="footer-text">Amazing. Tell us about your project!</span>
    </div>
    <div className="footer-contact">
      <img src={mail} alt=""/>
      <span className="footer-title">Contact us</span>
      <span className="footer-text">Get in touch</span>
    </div>
    <div className="footer-socials">
      <span className="footer-text">3rd Floor, Santa Monica Beach, CA, San Francisco</span>
      <span className="footer-text">(359) 0 123 456 789 - info@yourmail.com
      </span>
      <div className="footer-socials__icons">
        <a href="https://ashikujr.github.io/resume/dist/index.html"><img src={facebook} alt="facebook"/></a>
        <a href="https://ashikujr.github.io/resume/dist/index.html"><img src={twitter} alt="facebook"/></a>
        <a href="https://ashikujr.github.io/resume/dist/index.html"><img src={pinterest} alt="facebook"/></a>
      </div>
    </div>
  </footer>
};

export default Footer;