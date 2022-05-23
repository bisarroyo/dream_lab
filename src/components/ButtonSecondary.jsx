import React from 'react'
import ButtonSecondaryStyle from '@styles/components/ButtonSecondaryStyle'

const ButtonSecondary = (props) => {
  const { text } = props
  return (
    <ButtonSecondaryStyle>
      {text}
    </ButtonSecondaryStyle>
  )
}
export default ButtonSecondary
