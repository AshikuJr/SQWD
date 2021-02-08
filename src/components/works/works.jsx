import React, {useState} from 'react';
import './works.sass';

import photo from './photo.jpg';
import kitten from './kitten.jpg';
import mac from './mac.jpg';
import apple from './apple.jpg';

import Container from '../container/container.jsx';

const Work = props => {
  return <div className={"work" + ((props.orientation === 'left') ? ' work_left' : ' work_right')}>
    <h3 className={((props.state === 'active') ? 'work-title' : 'work-title work-title_crossed') + (props.orientation === 'left' ? ' work-title_left' : ' work-title_right')}>{props.title}</h3>
    <img src={props.img} alt="" className="work-image"/>
    <span className="work-genre">{props.genre}</span>
    <p className='work-descr'>{props.descr}</p>
    <a className={(props.state === 'active') ? 'work-link' : 'work-link work-link_crossed'} href="https://ashikujr.github.io/resume/dist/index.html">read more</a>
  </div>
};

const Works = props => {
  let [current, setCurrent] = useState('a');
  return <section className="works" id='works'>
    <Container content={
      <div className="works-wrap">
        <div className="works-header">
          <h2 className="works-title">Latest Works</h2>
          <div className="works-navs">
            <button onClick = {() => setCurrent('a')}>all</button>
            <button onClick = {() => setCurrent('d')}>design</button>
            <button onClick = {() => setCurrent('b')}>branding</button>
            <button onClick = {() => setCurrent('p')}>photography</button>
            <button onClick = {() => setCurrent('i')}>illustration</button>
          </div>
        </div>
        <Work 
        state={(current === 'a' || current === 'i') ? 'active' : 'inactive'}
        genre='illustration'
        title='100 years photography'
        descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        img={photo}
        orientation='left'/>
        <Work 
        state={(current === 'a' || current === 'p') ? 'active' : 'inactive'}
        genre='photography'
        title="a kitten's life"
        descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        img={kitten}
        orientation='right'/>
        <Work 
        state={(current === 'a' || current === 'd') ? 'active' : 'inactive'}
        genre='web design'
        title='groovemade products for mac'
        descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        img={mac}
        orientation='left'/>
        <Work 
        state={(current === 'a' || current === 'b') ? 'active' : 'inactive'}
        genre='branding'
        title="apple's lost magic"
        descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        img={apple}
        orientation='right'/>
      </div>
    }/>
  </section>
};

export default Works;