import React from 'react'

const TextBox = (props) => {
  const { title, text } = props
  return (
    <div className='text-box'>
      <h3 className='text-box-title'>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default TextBox
