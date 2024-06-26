import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import HomePage from './views/HomePage';

const App = () => {
  const navigateTo = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <main>
        <HomePage navigateTo={navigateTo} />
        <About />
        <Skills />
        <Resume />
        <Projects />
      </main>
    </div>
  );
};

export default App;
