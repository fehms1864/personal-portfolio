import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Resume.css';

const Resume = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.section id="resume" className="resume-section" style={props}>
      <div className="container">
        <h2 className="display-4 mb-4">Resume</h2>
        <p className='text-center'>
          <a
            href="DE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </p>
      </div>
    </animated.section>
  );
};

export default Resume;