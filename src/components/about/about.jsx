import React from 'react';
import './about.sass';

const About = props => {
  return <section className="about">
    <h2 className="about-title">
      <span className="about-title__bold">we are</span>
      <span className="about-title__light">the sqwd</span>
    </h2>
    <span className="about-subtitle-first">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
    <span className="about-subtitle-second">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
  </section>
};

export default About;