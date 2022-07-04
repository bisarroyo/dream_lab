import React from 'react'
import BlogContainer from '@containers/BlogContainer'

const Blog = () => {
  return (
    <>
      <BlogContainer
        title='Primer post'
        text='lorem ipsum dolor sit amet consectetur adipiscing elit non'
        author='Bismark'
        date='10/05/2022'
        likes='5'
      />
    </>
  )
}

export default Blog
