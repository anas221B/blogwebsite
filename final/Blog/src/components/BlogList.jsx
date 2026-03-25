import React from "react";
import BlogItem from "./BlogItems"; 
import { useContext } from "react";
import BlogContext from "../store/Context";

const BlogList = () => {
 const { blogs } = useContext(BlogContext);

  return (
    <div>
      {blogs.map((blog) => (
        <BlogItem
          key={blog.id}
          title={blog.title}
          image={blog.image}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default BlogList;