import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Resume.css';

const Resume = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const [showResume, setShowResume] = useState(false);
  const [buttonText, setButtonText] = useState("View Resume")

  const toggleResume = () => {
    setShowResume(!showResume);
    if (buttonText === "View Resume") {
      setButtonText("Hide Resume")
    }
    else {
      setButtonText("View Resume")
    }
  };

  const slideInAnimation = useSpring({
    height: showResume ? '65rem' : '0px',
    opacity: showResume ? 1 : 0,
    overflow: 'hidden',
    config: { tension: 200, friction: 30 }
  });

  return (
    <animated.section id="resume" className="resume-section" style={props}>
      <div className="container">
        <h2 className="display-4 mb-4">Resume</h2>
        <p className='text-center'>
          <button
            onClick={toggleResume}
            className="btn btn-primary mb-4"
          >
            {buttonText}
          </button>
        </p>
        <animated.div style={slideInAnimation} className="pdfResume">
          <iframe title='view resume' src="/DE_Resume.pdf#zoom=90" width="100%" height="1025rem" />
        </animated.div>
      </div>
    </animated.section>
  );
};

export default Resume;