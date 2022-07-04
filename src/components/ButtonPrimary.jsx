import React from 'react'

const ButtonPrimary = (props) => {
  const { text, type, disabled, onClick } = props
  return (
    <button
      className='btn-primary'
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
export default ButtonPrimary
