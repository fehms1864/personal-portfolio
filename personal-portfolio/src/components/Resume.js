import React, {useState} from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../styles/Resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [showResume, setShowResume] = useState(false);
  const [buttonText, setButtonText] = useState("View Resume")

const toggleResume = () => {
  setShowResume(!showResume);
  if(buttonText === "View Resume") {
    setButtonText("Hide Resume")
  }
  else {
    setButtonText("View Resume")
  }
};
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
          {showResume && (
           <div className="pdf-viewer">
            <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`}>
              <Viewer fileUrl="/DE_Resume.pdf" plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
          )}
        </p>
      </div>
    </animated.section>
  );
};

export default Resume;