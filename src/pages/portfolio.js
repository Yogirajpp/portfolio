// Portfolio.js
import React from 'react';
import './portfolio.css';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const Portfolio = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      tags: ['Tag1', 'Tag2', 'Tag3'],
      imageUrl: 'project1.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      tags: ['Tag4', 'Tag5', 'Tag6'],
      imageUrl: 'project2.jpg',
    },
    // Add more project data as needed
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="portfolio-header-info">
          <h2>I'm a</h2>
          <p>FULLSTACK WEB DEVELOPER</p>
        </div>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/browser-link-5617628-4674339.png?f=webp" alt="" className="portfolio-header-image" />
      </div>
      <div className="portfolio-about-me">
        <img src="https://img.freepik.com/premium-vector/vector-flat-illustration-software-developer-cyber-program-security_776789-211.jpg" alt="" className="portfolio-about-me-image" />
        <div className="portfolio-about-me-info">
          <h2>Yogiraj Patil</h2>
          <p>Hello, I'm Yogiraj Patil, a passionate full-stack web developer with a strong background in building dynamic and responsive web applications. With 2+ years of experience in the field, I have honed my skills in both front-end and back-end development, allowing me to create seamless user experiences and robust server-side architectures.</p>
        </div>
      </div>
      
      <div className="portfolio-experience">
        <h3>Experience</h3>
        {/* Your experience details go here */}
      </div>
      
      <div className="portfolio-projects">
        <h3>Top Projects</h3>
        <div className="project-list">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
