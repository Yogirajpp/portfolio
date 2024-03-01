// Portfolio.js
import React from 'react';
import './portfolio.css';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import profilePhoto from '../images/profile-photo.jpeg'; // Import the image
import { FaReact, FaNodeJs, FaAngular, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import projectsData from '../json/projects.json'; // Import projects data from projects.js
import Footer from '../components/footer/footer';


const Portfolio = () => {

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
        <div className="portfolio-about-me-image">
          <img src={profilePhoto} alt="" />
        </div>
        <div className="portfolio-about-me-info">
          <h2>Yogiraj Patil</h2>
          <p>Hello, I'm Yogiraj Patil, a passionate full-stack web developer with a strong background in building dynamic and responsive web applications. With 2+ years of experience in the field, I have honed my skills in both front-end and back-end development, allowing me to create seamless user experiences and robust server-side architectures.</p>
        </div>
      </div>

      <div className="portfolio-projects">
        <h3>Top Projects</h3>
        <div className="project-list">
          {projectsData.slice(0, 3).map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
      
      <div className="portfolio-experience">
        <h3>Experience</h3>
        <div className="experience-details">
          <div className="experience-item">
            <FaReact className="icon" />
            <span>React</span>
          </div>
          <div className="experience-item">
            <SiMongodb className="icon" />
            <span>MongoDB</span>
          </div>
          <div className="experience-item">
            <FaNodeJs className="icon" />
            <span>Node.js</span>
          </div>
          <div className="experience-item">
            <FaAngular className="icon" />
            <span>Angular</span>
          </div>
          <div className="experience-item">
            <SiExpress className="icon" />
            <span>Express.js</span>
          </div>
          {/* <div className="experience-item">
            <IoNextjs className="icon" />
            <span>Next.js</span>
          </div> */}
          <div className="experience-item">
            <FaPython className="icon" />
            <span>Python</span>
          </div>
          <div className="experience-item">
            <SiJavascript className="icon" />
            <span>Javascript</span>
          </div>
          
          {/* Add more experience items as needed */}
        </div>
      </div>

      <div className='footer-all'>
        <Footer />
      </div>
      
      
    </div>
  );
};

export default Portfolio;
