import React from 'react'
import Header from './components/Header'
import AddBlogs from './components/AddBlogs'
import BlogList from './components/BlogList'
import Provider from './store/provider'

const App = () => {
  return (
    <div>
      <Provider>
        <Header/>
        <AddBlogs/>
        <BlogList/>
     </Provider>
    </div>
  )
}

export default App
