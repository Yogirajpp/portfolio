import React from 'react';
import BlogCard from '../components/BlogCard/BlogCard';
import blogsData from '../json/blogs.json'; // Import the blogs data
import './blogs.css';

const Blogs = () => {
  return (
    <div className="blogs">
      <h2>Blogs</h2>
      {blogsData.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          date={blog.date}
          tags={blog.tags}
          imageUrl={blog.imageUrl}
          blogUrl={blog.blogUrl}
        />
      ))}
    </div>
  );
};

export default Blogs;
