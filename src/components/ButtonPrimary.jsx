import React from 'react'
import ButtonPrimaryStyle from '@styles/components/ButtonPrimaryStyle'

const ButtonPrimary = (props) => {
  const { text } = props
  return (
    <ButtonPrimaryStyle>
      {text}
    </ButtonPrimaryStyle>
  )
}
export default ButtonPrimary
