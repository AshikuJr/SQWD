import React from 'react';
import '../styles.sass';

import Navbar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx';
import About from './about/about.jsx';
import AboutBG from './aboutbg/aboutbg.jsx';
import Services from './services/services.jsx';

import Team from './team/team.jsx';
import Blog from './blog/blog.jsx';
import Footer from './footer/footer.jsx';

const App = () => {
  return <div className="app">
    <Navbar/>
    <Hero/>
    <About/>
    <AboutBG/>
    <Services/>

    <Team/>
    <Blog/>
    <Footer/>
  </div>
};

export default App;