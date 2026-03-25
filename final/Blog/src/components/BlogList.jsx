import React from "react";
import BlogItem from "./BlogItems"; 

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Blueberry",
      image: "https://m.media-amazon.com/images/I/719KWUpW3iL._AC_UF1000,1000_QL80_.jpg",
      description: "Blueberry is the most healthy fruit",
    },
    {
      id: 2,
      title: "Cherry",
      image: "https://t4.ftcdn.net/jpg/19/25/36/61/160_F_1925366168_K2mLMzA3Dszvj97MlgyKl2c7LfP1in0o.jpghttps://t4.ftcdn.net/jpg/19/25/36/61/360_F_1925366168_K2mLMzA3Dszvj97MlgyKl2c7LfP1in0o.jpg",
      description: "Cherry is the most healthy fruit",
    },
  ];

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