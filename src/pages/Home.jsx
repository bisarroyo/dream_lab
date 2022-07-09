import React, { useState } from 'react'
import ButtonPrimary from '@components/ButtonPrimary'
import Input from '@components/Input'
import Modal from '@containers/Modal'
import TextBoxContainer from '@containers/TextBoxContainer'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// import containers
import HomeContainer from '@containers/HomeContainer'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // useEffect(() => {
  //   AOS.init()
  //   AOS.refresh()
  // }, [])

  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
  }
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
      <HomeContainer />
      <TextBoxContainer
        title='Skills'
        title1='lorem'
        text1='lorem ipsum dolor sit amet'
        title2='lorem'
        text2='lorem ipsum dolor sit amet'
        title3='lorem'
        text3='lorem ipsum dolor sit amet'
      />
      {
        showModal && (
          <Modal onClose={handleClose} title='Contact me!'>
            <form>
              <Input label='Name' name='name' type='text' placeholder='Juan' value={contactData.name} onChange={handleChange} />
              <Input label='Email' name='email' type='email' placeholder='you@mail.com' value={contactData.email} onChange={handleChange} />
              <Input label='Message' name='message' type='text' placeholder='Please write your message' value={contactData.message} onChange={handleChange} />
              <ButtonPrimary text='Send!' onClick={handleSubmit} />
            </form>
          </Modal>
        )
      }
      <ButtonPrimary text='Cantact me' onClick={handleOpen} />
    </>
  )
}

export default Home
