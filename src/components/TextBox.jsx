import React from 'react'

const BlogContainer = (props) => {
  const { title, text } = props
  return (
    <div className='text-box'>
      <h2 className='text-box__title title-h2'>{title}</h2>
      <p className='text-box__text text-p'>{text}</p>
    </div>
  )
}

export default BlogContainer
