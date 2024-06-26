import React from 'react';
import '../styles/ProjectItem.css';

const ProjectItem = ({ title, description, link, image }) => {
  return (
    <div className="project-item card mb-4 shadow-sm">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src={image}
            alt=""
            className="img-fluid rounded-end"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
