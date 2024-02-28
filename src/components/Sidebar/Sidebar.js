import React from 'react';
import { Link } from 'react-router-dom';
import { FaBlogger, FaBriefcase, FaFolder, FaHandshake, FaEnvelope, FaFile } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li><Link to="/Blogs" className="sidebar-link"><FaBlogger /> Blogs</Link></li>
        <li><Link to="/Projects" className="sidebar-link"><FaBriefcase /> Projects</Link></li>
        <li><Link to="/Portfolio" className="sidebar-link"><FaFolder /> Portfolio</Link></li>
        <li><Link to="/Services" className="sidebar-link"><FaHandshake /> Services</Link></li>
        <li><Link to="/Contact" className="sidebar-link"><FaEnvelope /> Contact</Link></li>
        <li><Link to="/Resume" className="sidebar-link"><FaFile /> Resume</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
