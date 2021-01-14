import React from 'react';
import '../styles.sass';

import Navbar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx';
import About from './about/about.jsx';
import AboutBG from './aboutbg/aboutbg.jsx';
import Services from './services/services.jsx';

const App = () => {
  return <div className="app">
    <Navbar/>
    <Hero/>
    <About/>
    <AboutBG/>
    <Services/>
  </div>
};

export default App;