import React from 'react';
import './about.sass';

import Container from '../container/container.jsx';

const About = props => {
  return <section className="about">
    <Container content={
      <div className="about-wrap">
        <h2 className="about-title">
          <span className="about-title__bold">we are</span>
          <span className="about-title__light">the sqwd</span>
        </h2>
        <span className="about-subtitle-first">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
        <span className="about-subtitle-second">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
      </div>
    }/>
    
    
  </section>
};

export default About;