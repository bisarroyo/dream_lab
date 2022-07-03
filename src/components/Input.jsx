import React from 'react'

const Input = (props) => {
  const { label, name, type, placeholder, value, handler } = props
  return (
    <div className='input'>
      <label className='input-label' htmlFor={name}>{label}</label>
      <input
        className='input-text'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handler}
      />
    </div>
  )
}

export default Input
