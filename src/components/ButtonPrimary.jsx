import React from 'react'

const ButtonPrimary = (props) => {
  const { text, type, disabled } = props
  return (
    <button
      className='btn-primary'
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
export default ButtonPrimary
