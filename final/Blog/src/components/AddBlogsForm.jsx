import React, { useRef, useContext } from "react";
import BlogContext from "../store/Context";
import "./AddBlogsForm.css";

const AddBlogsForm = () => {
  const { setBlogs } = useContext(BlogContext);

  const titleRef = useRef(null);
  const urlRef = useRef(null);
  const desRef = useRef(null);

  const handelclick = (e) => {
    e.preventDefault();

    const blog = {
      title: titleRef.current.value,
      image: urlRef.current.value,
      description: desRef.current.value,
      id: Date.now().toString(),
    };

    setBlogs((prevBlogs) => [blog, ...prevBlogs]);

    // clear inputs (important UX)
    titleRef.current.value = "";
    urlRef.current.value = "";
    desRef.current.value = "";
  };

  return (
    <form className="blog-form" onSubmit={handelclick}>
      <h2>Add New Blog</h2>

      <div className="form-group">
        <label>Title</label>
        <input type="text" ref={titleRef} placeholder="Enter blog title" />
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input type="url" ref={urlRef} placeholder="Paste image link" />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea ref={desRef} placeholder="Write something..." />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default AddBlogsForm;