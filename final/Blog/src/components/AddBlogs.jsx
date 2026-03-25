import React from 'react'
import { useState } from 'react'
import AddBlogsForm from './AddBlogsForm'

const AddBlogs = () => {
  const [showAddBlogs, setShowAddBlogs] = useState(true)

  return (
    <div>
      {showAddBlogs && <button onClick={()=>setShowAddBlogs(false)}>Add Blogs</button>}
      {!showAddBlogs && <div><AddBlogsForm/><button onClick={()=>setShowAddBlogs(true)}>cancel</button></div>}

    </div>
  )
}

export default AddBlogs
