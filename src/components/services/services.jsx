import React from 'react';
import './services.sass';

import icon from './service-icon.svg';

import Container from '../container/container.jsx';

const ServiceBlock = props => {
  return <div className="service-block">
    <h3 className="service-block__title">{props.title}</h3>
    <img src={props.icon} alt="" className="service-block__icon"/>
    <p className="service-block__text">{props.text}</p>
    <a href={props.link} className="service-block__link">read more</a>
  </div>
};

const Services = props => {
  return <section className="services">
    <Container content={
      <div className="services-wrap">
        <h2 className="services-title">Our Services</h2>
        <div className="services-blocks">
          <ServiceBlock 
          title='branding'
          icon = {icon}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          link='#'/>
          <ServiceBlock 
          title='design'
          icon = {icon}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          link='#'/>
          <ServiceBlock 
          title='development'
          icon = {icon}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          link='#'/>
        </div>
      </div>
    }/>
  </section>
};

export default Services;