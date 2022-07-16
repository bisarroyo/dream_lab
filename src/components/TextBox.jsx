import React from 'react'

const TextBox = (props) => {
  const { title, text } = props
  return (
    <div className='text-box'>
      <h3 className='text-box__title'>{title}</h3>
      <p className='text-box__text'>{text}</p>
    </div>
  )
}

export default TextBox
