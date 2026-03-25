import React from "react";

const BlogItem = ({ title, image, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default BlogItem;