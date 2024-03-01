// Blogs.js
import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './projects.css';
import projectsData from '../json/projects.json'; // Import projects data from JSON file

const Projects = () => {
 


  return (
    <div className="projects">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          date={project.date}
          tags={project.tags}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};


export default Projects; // Export the projects array directly
