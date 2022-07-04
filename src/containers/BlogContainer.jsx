import React from 'react'
import bismark from '../assets/images/bismark.jpg'

const BlogContainer = (props) => {
  const { title, text, author, date, likes } = props
  return (
    <>
      <div className='blog-header'>
        <img className='blog-header__image' src={bismark} alt='post image' />
        <h1 className='blog-header__title title-h1'>
          {title}
        </h1>
        <div className='blog-header__data text-p'>
          <span className='span author'>{author}</span>
          <span>{date}</span>
          <span>{likes}</span>
        </div>
      </div>
      <div className='container'>
        <p className='text-p'>
          {text}
        </p>
      </div>
    </>
  )
}

export default BlogContainer
