// Blogs.js
import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './projects.css';

const Blogs = () => {
  // Assuming you have blog data as an array of objects
  const projects = [
    {
      title: 'Title of Project 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    {
      title: 'Title of Project 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas.jpg'
    },
    // Add more blog data as needed
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
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

export default Blogs;
