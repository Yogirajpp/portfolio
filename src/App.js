// Import necessary components and libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom';
  import './App.css';
// import Community from './pages/Community';

import Blogs from './pages/blogs';
import Projects from './pages/project';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Sidebar from './components/Sidebar/Sidebar';


// Main App Component
const App = () => {
  

  return (
    <div className='App'>
      <Sidebar/>
        <Routes>
          {/* Define your routes inside the Sidebar component */}
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      {/* </Sidebar> */}
    </div>
  );
};

export default App;
