import React, { useRef, useContext } from "react";
import BlogContext from "../store/Context";
import "./AddBlogsForm.css";

const AddBlogsForm = () => {
  const { setBlogs, blogToEdit, editBlog, setBlogToEdit } =
    useContext(BlogContext);

  const titleRef = useRef(null);
  const urlRef = useRef(null);
  const desRef = useRef(null);

  const handelclick = (e) => {
    e.preventDefault();

    const blog = {
      title: titleRef.current.value,
      image: urlRef.current.value,
      description: desRef.current.value,
    };

    if (blogToEdit) {
      // ✏️ EDIT MODE
      editBlog(blogToEdit.id, blog);
      setBlogToEdit(null);
    } else {
      // ➕ ADD MODE
      const newBlog = {
        ...blog,
        id: Date.now().toString(),
      };
      setBlogs((prev) => [newBlog, ...prev]);
    }

    // clear
    titleRef.current.value = "";
    urlRef.current.value = "";
    desRef.current.value = "";
  };

  return (
    <form className="blog-form" onSubmit={handelclick}>
      <h2>{blogToEdit ? "Edit Blog" : "Add New Blog"}</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          ref={titleRef}
          defaultValue={blogToEdit?.title || ""}
          placeholder="Enter blog title"
        />
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input
          type="url"
          ref={urlRef}
          defaultValue={blogToEdit?.image || ""}
          placeholder="Paste image link"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          ref={desRef}
          defaultValue={blogToEdit?.description || ""}
          placeholder="Write something..."
        />
      </div>

      <button type="submit" className="submit-btn">
        {blogToEdit ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default AddBlogsForm;