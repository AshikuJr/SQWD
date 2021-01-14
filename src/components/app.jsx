import React from 'react';
import '../styles.sass';

import Container from './container/container.jsx';
import Navbar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx';
import About from './about/about.jsx';
import AboutBG from './aboutbg/aboutbg.jsx';
import Services from './services/services.jsx';

const App = () => {
  return <div className="app">
    <header className="nav">
      <Container content={<Navbar/>}/>
    </header>
    <Hero/>
    <Container content={<About/>}/>
    <AboutBG/>
  </div>
};

export default App;