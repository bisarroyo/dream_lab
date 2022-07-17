import React from 'react'

import BlogComponent from '@components/BlogComponent'

const BlogHome = () => {
  return (
    <div className='container-fluid flex-column home-container-blog'>
      <h3>Blog</h3>
      <div className='flex-column'>
        <BlogComponent />
        <BlogComponent />
        <BlogComponent />
      </div>
    </div>
  )
}

export default BlogHome
