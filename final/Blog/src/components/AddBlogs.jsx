import React, { useState } from 'react'
import AddBlogsForm from './AddBlogsForm'
import './AddBlogs.css'

const AddBlogs = () => {
  const [showAddBlogs, setShowAddBlogs] = useState(true)

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
            onClick={() => setShowAddBlogs(true)}
          >
            Cancel
          </button>
        </div>
      )}

    </div>
  )
}

export default AddBlogs