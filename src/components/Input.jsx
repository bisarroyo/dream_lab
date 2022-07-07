import React from 'react'

const Input = (props) => {
  const { label, name, type, placeholder, value, onChange } = props
  return (
    <div className='input'>
      <label className='input-label' htmlFor={name}>{label}</label>
      <input
        className='input-text'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
