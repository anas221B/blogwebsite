import React from 'react'
import Header from './components/Header'
import AddBlogs from './components/AddBlogs'
import BlogList from './components/BlogList'

const App = () => {
  return (
    <div>
      <Header/>
     <AddBlogs/>
     <BlogList/>
    </div>
  )
}

export default App
