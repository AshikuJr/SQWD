import React from 'react';
import './hero.sass';

import Container from '../container/container.jsx';

const Hero = props => {
  return <section className="hero">
    <Container content={
      <div className="hero-wrap">
        <h1 className="hero__title">WHERE GREAT IDEAS COME TO LIFE</h1>
        <p className="hero__subtitle">Passionate creative studio helping startups grow their business!</p>
      </div>
    }/>
  </section>
};

export default Hero;