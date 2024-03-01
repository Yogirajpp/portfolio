// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, date, tags, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-date">{date}</p>
        <div className="project-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card-tag">{tag}</span>
          ))}
        </div>
        {/* Add checkout button */}
        <button className="project-checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ProjectCard;
