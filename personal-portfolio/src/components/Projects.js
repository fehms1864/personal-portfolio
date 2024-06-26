import React from 'react';
import ProjectItem from './ProjectItem';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Projects.css';

const Projects = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const projects = [
    {
      title: 'Pet Adoption Site',
      description: 'A simple site about adopting a pet.',
      link: 'https://github.com/fehms1864/m1-assignment.git',
      image: 'adoptionPoster.png'
    },
    {
      title: 'Great Cliffs Site',
      description: 'A simple site about Cliffs and hikeing.',
      link: 'https://github.com/fehms1864/homework-module1.git',
      image: 'GreatCliffs.png'
    },
    {
        title: 'Splash Away',
        description: 'Learn to swim! a site with water activities.',
        link: 'https://github.com/fehms1864/splash-away-web-601.git',
        image: 'splashes.png'
    },
    {
        title: 'Food Blog',
        description: 'An Express Application for a food blog.',
        link: 'https://github.com/fehms1864/m3-wk4-day3-lab-assignment.git',
        image: 'food-blog.webp'
    },
    {
        title: 'Game One',
        description: 'A simple site with a game board to play.',
        link: 'https://github.com/fehms1864/m3-w2-d3-homework.git',
        image: 'js-logo.webp'
    },
    {
        title: 'Auth App',
        description: 'A simple site to work on authentication logic.',
        link: 'https://github.com/fehms1864/authApp.git',
        image: 'js-logo.webp'
    },
    {
        title: 'Influencer Blog',
        description: 'A site for Influencers to login and save blogs.',
        link: 'https://github.com/fehms1864/influencer-blog.git',
        image: 'influencer-blog.jpeg'

    },
    {
        title: 'Job Quest',
        description: 'A site to keep records of job applications and their status.',
        link: 'https://github.com/fehms1864/JobQuest.git',
        image: 'JobCardLogo.jpeg'
    }
  ];

  return (
    <animated.section id="projects" className="projects-section" style={props}>
      <div className="container-md">
        <h2 className="display-4 mb-5">Projects</h2>
        <div className="row flex-row justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-sm-6 col-lg-4">
              <ProjectItem
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default Projects;