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
    <>
      <h1 className='title-h1'>{title}</h1>
      <div className='text-box-container'>
        <TextBox title={title1} text={text1} />
        <TextBox title={title2} text={text2} />
        <TextBox title={title3} text={text3} />
      </div>
    </>
  )
}

export default TextBoxContainer
