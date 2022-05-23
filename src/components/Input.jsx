import React from 'react'
import InputStyle from '@styles/components/InputStyle'

const Input = (props) => {
  const { label, name, type, placeholder, value, handler } = props
  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handler}
      />
    </InputStyle>
  )
}

export default Input
