import React from 'react'
import TextBox from '@components/TextBox'

const TextBoxContainer = (props) => {
  const {
    title,
    title1,
    text1,
    title2,
    text2,
    title3,
    text3
  } = props
  return (
    <div className='container-fluid'>
      <h2>{title}</h2>
      <div className='flex-fluid'>
        <TextBox title={title1} text={text1} />
        <TextBox title={title2} text={text2} />
        <TextBox title={title3} text={text3} />
      </div>
    </div>
  )
}

export default TextBoxContainer
