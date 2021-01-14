import React from 'react';
import './container.sass';

const Container = props => {
  return <div className="container">{props.content}</div>
};

export default Container;