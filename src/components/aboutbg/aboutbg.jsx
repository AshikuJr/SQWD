import React from 'react';
import './aboutbg.sass';

import firstPic from './about1.jpg';
import secondPic from './about2.jpg';

const AboutBG = props => {
  return <div className="aboutbg">
    <img src={firstPic} alt="" className="aboutbg-firstpic"/>
    <div className="aboutbg-greenbox"></div>
    <img src={secondPic} alt="" className="aboutbg-secondpic"/>
  </div>
};

export default AboutBG;