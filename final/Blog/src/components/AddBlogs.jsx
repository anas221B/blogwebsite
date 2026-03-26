import React, { useContext, useState} from 'react'
import AddBlogsForm from './AddBlogsForm'
import './AddBlogs.css'
import BlogContext from '../store/Context'

const AddBlogs = () => {
   const {showAddBlogs,setShowAddBlogs,setBlogToEdit}=useContext(BlogContext)
   const cancelhandler=()=>{
    setShowAddBlogs(true)
    setBlogToEdit(null)
   }

  return (
    <div className="addblogs-container">
      
      {showAddBlogs && (
        <button 
          className="addblogs-btn"
          onClick={() => setShowAddBlogs(false)}
        >
          + Add Blog
        </button>
      )}

      {!showAddBlogs && (
        <div className="addblogs-card">
          <AddBlogsForm />

          <button 
            className="cancel-btn"
            onClick={cancelhandler}
          >
            Cancel
          </button>
        </div>
      )}

    </div>
  )
}

export default AddBlogs