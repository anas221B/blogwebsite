import React from "react";

const BlogItem = ({ title, image, description }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BlogItem;