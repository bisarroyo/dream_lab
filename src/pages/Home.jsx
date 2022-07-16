import React, { useState } from 'react'
import { TbHandClick } from 'react-icons/tb'

// import components
import HomeHeader from '@components/HomeHeader'
import ButtonPrimary from '@components/ButtonPrimary'
import Input from '@components/Input'

// import containers
import Modal from '@containers/Modal'
import TextBoxContainer from '@containers/TextBoxContainer'
import BlogHome from '@containers/BlogHome'

// import AOS from 'aos'
// import 'aos/dist/aos.css'

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
      <HomeHeader />
      <TextBoxContainer
        title='Skills'
        title1='lorem'
        text1='lorem ipsum dolor sit amet'
        title2='lorem'
        text2='lorem ipsum dolor sit amet'
        title3='lorem'
        text3='lorem ipsum dolor sit amet'
      />
      <BlogHome />
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
      <div className='container-fluid'>
        <h2>Contact me</h2>
        <form>
          <Input label='Name' name='name' type='text' placeholder='Juan' value={contactData.name} onChange={handleChange} />
          <Input label='Email' name='email' type='email' placeholder='you@mail.com' value={contactData.email} onChange={handleChange} />
          <Input label='Message' name='message' type='text' placeholder='Please write your message' value={contactData.message} onChange={handleChange} />
          <div className='flex-column'>
            <ButtonPrimary text='Send!' onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Home
