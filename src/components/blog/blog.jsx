import React, {useState} from 'react';
import './blog.sass';

import quote from './quote.svg';
import starActive from './star-active.svg';
import starInactive from './star-inactive.svg';

import Container from '../container/container.jsx';

const Post = props => {
  return <div className="blog-post">
    <p className="blog-post__text">{props.text}</p>
    <img src={quote} alt="" className="blog-post__quote"/>
    <p className="blog-post__author">
      <span className="blog-post__name">{props.name}</span>
      <span className="blog-post__position">{props.position}</span>
    </p>
    <div className="blog-post__rate">
      {[1,2,3,4,5].map((number, index) => {
        if ((number) <= props.rate) return <img key={index} src={starActive} alt='+'/>
        else return <img src={starInactive} alt='-'/>
      })}
    </div>
  </div>
};

const BlogSlider = props => {
  return <div className="blog-slider">
    {props.children[props.current]}
  </div>
};

const Blog = props => {
  let [current, setCurrent] = useState(1);
  return <section className="blog">
    <Container content={
      <div className="blog-wrap">
        <button className="blog-control" onClick={() => {
          if (current > 0) setCurrent(current - 1);
        }}>🡐</button>
        <BlogSlider current = {current}
        children = {[
          <Post 
          name='david james'
          position='web design'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          rate={3}/>,
          <Post 
          name='mikhail kozlov'
          position='layout design'
          text='Mne nravitsya, pryam normalno tak'
          rate={5}/>,
          <Post 
          name='oxxxymiron'
          position='battle rap'
          text='Im lost in time and space, transferred from a long gone kingdom of forgotten kin...'
          rate={4}/>,
        ]}/>
        <button className="blog-control" onClick={() => {
          if (current < 2) setCurrent(current + 1);
        }}>🡒</button>
      </div>
    }/>
  </section>
};

export default Blog;