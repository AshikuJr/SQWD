import React from 'react';
import './services.sass';

import Container from '../container/container.jsx';

const Services = props => {
  return <section className="services">
    <Container content={
      <div className="services-wrap">
        <h2 className="services-title">Our Services</h2>
        
      </div>
    }/>
  </section>
};

export default Services;