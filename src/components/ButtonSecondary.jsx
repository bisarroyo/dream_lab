import React from 'react'

const ButtonSecondary = (props) => {
  const { text } = props
  return (
    <button className='btn-secondary'>
      {text}
    </button>
  )
}
export default ButtonSecondary
