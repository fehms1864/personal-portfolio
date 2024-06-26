import React from 'react';
import '../styles/index.css';

const HomePage = ({ navigateTo }) => {
  return (
    <section className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => navigateTo('#about')}
        >
          About
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigateTo('#skills')}
        >
          Skills
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigateTo('#resume')}
        >
          Resume
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigateTo('#projects')}
        >
          Projects
        </button>
      </div>
    </section>
  );
};

export default HomePage;