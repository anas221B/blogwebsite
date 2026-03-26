import { useState } from "react";
import BlogContext from "./Context";
import React from "react";

const Provider = (props) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blueberry",
      image:
        "https://m.media-amazon.com/images/I/719KWUpW3iL._AC_UF1000,1000_QL80_.jpg",
      description: "Blueberry is the most healthy fruit",
    },
    {
      id: 2,
      title: "Cherry",
      image:
        "https://t4.ftcdn.net/jpg/19/25/36/61/360_F_1925366168_K2mLMzA3Dszvj97MlgyKl2c7LfP1in0o.jpg",
      description: "Cherry is the most healthy fruit",
    },
  ]);

  const [showAddBlogs, setShowAddBlogs] = useState(true);
  const [blogToEdit, setBlogToEdit] = useState(null);

  // 🗑️ DELETE FUNCTION
  const deleteBlog = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  // ✏️ EDIT FUNCTION
  const editBlog = (id, updatedBlog) => {
    
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id ? { ...blog, ...updatedBlog } : blog
      )
    );
 
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        showAddBlogs,
        setShowAddBlogs,
        blogToEdit,
        setBlogToEdit,
        deleteBlog,   // ✅ added
        editBlog      // ✅ added
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default Provider;