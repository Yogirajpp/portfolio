// Blogs.js
import React from 'react';
import BlogCard from '../components/BlogCard/BlogCard';
import './blogs.css';

const Blogs = () => {
  // Assuming you have blog data as an array of objects
  const blogs = [
    {
      title: 'Title of Blog 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 1',
      date: 'January 1, 2024',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    {
      title: 'Title of Blog 2',
      date: 'January 2, 2024',
      tags: ['React', 'CSS', 'Frontend'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhsXcdSjtbAQoKWhCDiLDB2BZ98dkT45LBt95U1lAEDN74M9WfkYzDa3tvJbWxsULcA&usqp=CAU'
    },
    // Add more blog data as needed
  ];

  return (
    <div className="blogs">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          date={blog.date}
          tags={blog.tags}
          imageUrl={blog.imageUrl}
        />
      ))}
    </div>
  );
};

export default Blogs;
