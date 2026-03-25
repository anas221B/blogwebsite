import React from "react";
import "./BlogItems.css";

const BlogItem = ({ title, image, description }) => {

  return (
    <div className="blog-card">
      
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>

      <div className="blog-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
        <button> Edit</button>
        <button>Delete</button>
        </div>
      </div>

    </div>
  );
};

export default BlogItem;