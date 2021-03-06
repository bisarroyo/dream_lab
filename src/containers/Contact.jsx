import React, { useState } from 'react'

// import components
import Input from '@components/Input'
import ButtonPrimary from '@components/ButtonPrimary'
import TextArea from '../components/TextArea'

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div className='container-fluid'>
        <h2>Contact me</h2>
        <form className='flex-column'>
          <Input label='Name' name='name' type='text' placeholder='Juan' value={contactData.name} onChange={handleChange} />
          <Input label='Email' name='email' type='email' placeholder='you@mail.com' value={contactData.email} onChange={handleChange} />
          <TextArea label='Message' name='message' type='text' placeholder='Please write your message' value={contactData.message} onChange={handleChange} />
          <div className='flex-column'>
            <ButtonPrimary className='btn-secondary' text='Send!' onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
