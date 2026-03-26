import React, { useContext } from "react";
import BlogItem from "./BlogItems";
import BlogContext from "../store/Context";
import "./BlogList.css";

const BlogList = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="bloglist-container">
      {blogs.length === 0 ? (
        <p className="empty-text">No blogs yet. Add one 🚀</p>
      ) : (
        blogs.map((blog) => (
          <BlogItem
            id={blog.id}
            title={blog.title}
            image={blog.image}
            description={blog.description}
          />
        ))
      )}
    </div>
  );
};

export default BlogList;