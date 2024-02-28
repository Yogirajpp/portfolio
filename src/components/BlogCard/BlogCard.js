// BlogCard.js
import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, date, tags, imageUrl }) => {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt={title} className="blog-card-image" />
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-date">{date}</p>
        <div className="blog-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="blog-card-tag">{tag}</span>
          ))}
        </div>
        {/* Add checkout button */}
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default BlogCard;
