import React from 'react'

import BlogComponent from '@components/BlogComponent'

const BlogHome = () => {
  return (
    <div className='container-fluid home-container-blog'>
      <h2>Blog</h2>
      <div className='flex-column'>
        <BlogComponent />
        <BlogComponent />
        <BlogComponent />
      </div>
    </div>
  )
}

export default BlogHome
