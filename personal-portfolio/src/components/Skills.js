import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Skills.css';

const Skills = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.section id="skills" className="skills-section" style={props}>
      <div className="container">
        <h2 className="display-4 mb-4">Skills</h2>
        <div className="row">
          <div className="col-md-4 skill">
            <h3>HTML</h3>
          </div>
          <div className="col-md-4 skill">
            <h3>CSS/LESS/SASS</h3>
          </div>
          <div className="col-md-4 skill">
            <h3>JavaScript</h3>
          </div>
          <div className="col-md-4 skill">
            <h3>React</h3>
          </div>
          <div className="col-md-4 skill">
            <h3>Vue</h3>
          </div>
          <div className="col-md-4 skill">
            <h3>Node.js</h3>
          </div>
          <div className="col-md-4 skill">
            <h3>MongoDB</h3>
          </div>
          <div className="col-md-4 skill">
            <h3>Bootstrap</h3>
          </div>
          <div className="col-md-4 skill">
            <h3>SQL</h3>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default Skills;