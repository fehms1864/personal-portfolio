import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/About.css';

const About = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.section id="about" className="about-section" style={props}>
      <div className="container-md">
        <h2 className="display-4 mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <p className="lead">
              Hi, My name is Fehmina Hasan, a passionate developer with experience in building web applications using modern technologies like React, Node.js, and more. 
              I recently earned my MBA from Westcliff University with a concentration in Web Developement.
              I love creating user-friendly, accessible, and performant web experiences. In Addition I am looking for a career in Software Engineering
              with a track towards the techinal manager side.
            </p>
          </div>
          <div className="col-md-4">
            <div className="profile-pic">
              <img src="Profile.JPG" alt="Profile" className="img-fluid rounded-circle shadow" />
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default About;