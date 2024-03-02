import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlogger, FaBriefcase, FaFolder, FaHandshake, FaEnvelope, FaFile } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link 
            to="/" 
            className={`sidebar-link ${selectedLink === "Portfolio" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Portfolio")}
          >
            <FaFolder /> Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="/Resume" 
            className={`sidebar-link ${selectedLink === "Resume" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Resume")}
          >
            <FaFile /> Resume
          </Link>
        </li>
        <li>
          <Link 
            to="/Projects" 
            className={`sidebar-link ${selectedLink === "Projects" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Projects")}
          >
            <FaBriefcase /> Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/Blogs" 
            className={`sidebar-link ${selectedLink === "Blogs" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Blogs")}
          >
            <FaBlogger /> Blogs
          </Link>
        </li>
        <li>
          <Link 
            to="/Services" 
            className={`sidebar-link ${selectedLink === "Services" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Services")}
          >
            <FaHandshake /> Services
          </Link>
        </li>
        <li>
          <Link 
            to="/Contact" 
            className={`sidebar-link ${selectedLink === "Contact" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Contact")}
          >
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
