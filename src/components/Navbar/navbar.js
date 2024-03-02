// Navbar.js
import React from 'react';
import './navbar.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Yogiraj</div>
      <div className="social-icons">
        <a href="https://www.instagram.com/yogiraj_675/"><FaInstagram /></a>
        <a href="https://twitter.com/Yogiraj_675"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/yogirajpp/"><FaLinkedin /></a>
        <a href="https://github.com/Yogirajpp/"><FaGithub /></a>
      </div>
    </nav>
  );
};

export default Navbar;
