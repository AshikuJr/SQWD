import React from 'react';
import './team.sass';

import tom from './tom.jpg';
import michael from './michael.jpg';
import tim from './tim.jpg';

import Container from '../container/container.jsx';

const TeamMember = props => {
  return <div className="team-member" style={{backgroundImage: `url(${props.photo})`}}>
    <div className="team-member-info">
      <span className="team-member-info__name">{props.name}</span>
      <span className="team-member-info__position">{props.position}</span>
      <p className="team-member-info__lyrics">{props.lyrics}</p>
    </div>
  </div>
};

const Team = props => {
  return <section className="team" id='team'>
    <Container content={
      <div className='team-wrap'>
        <h2 className="team-title">The Team</h2>
        <div className="team-people">
          <TeamMember 
          name='tom jones'
          photo={tom}
          position='king in the north'
          lyrics="I dunt wunt it..."/>
          <TeamMember 
          name='michael fraup'
          photo={michael}
          position='creative director'
          lyrics="Create with simplicity in mind!"/>
          <TeamMember 
          name='tim cahill'
          photo={tim}
          position='rightful heir to the iron throne'
          lyrics="She's muh queen!"/>
        </div>
      </div>
    }/>
  </section>
};

export default Team;