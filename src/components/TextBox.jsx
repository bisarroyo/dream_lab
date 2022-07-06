import React from 'react'
import bismark from '../assets/images/bismark.jpg'

const BlogContainer = () => {
  return (
    <>
      <div className='blog-header'>
        <img className='blog-header__image' src={bismark} alt='Bismark photo' />
        <h1 className='blog-header__title title-h1'>
          Bismark Arroyo
        </h1>
      </div>
    </>
  )
}

export default BlogContainer
