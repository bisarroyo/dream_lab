import React from 'react'
import js from '../assets/images/js.png'

const BlogComponent = () => {
  return (
    <div className='flex-row'>
      <img src={js} alt='Javascript image' width='80px' />
      <div className='flex-column'>
        <h4>JavaScript Blog</h4>
        <p>Text for javascript blog [...]</p>
      </div>
    </div>
  )
}

export default BlogComponent
