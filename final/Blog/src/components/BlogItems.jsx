import React from "react";
import "./BlogItems.css";
import { useContext } from "react";
import BlogContext from "../store/Context";

const BlogItem = ({ title, image, description, id }) => {
  const { blogs ,setBlogs,setShowAddBlogs,setBlogToEdit} = useContext(BlogContext);
  
  const handleEdit=(id)=>{
    setShowAddBlogs(false)
    setBlogToEdit({title, image, description, id })
  }

 const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    console.log(updatedBlogs);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="blog-card">
      
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>

      <div className="blog-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
        <button onClick={() => handleEdit(id)}> Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>

    </div>
  );
};

export default BlogItem;