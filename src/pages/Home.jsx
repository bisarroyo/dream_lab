import React, { useState } from 'react'
import ButtonPrimary from '@components/ButtonPrimary'
import ButtonSecondary from '@components/ButtonSecondary'
import Input from '@components/Input'
import Modal from '@containers/Modal'

// import containers
import HomeContainer from '@containers/HomeContainer'

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
  }
  return (
    <>
      <HomeContainer />
      {
        showModal && (
          <Modal onClose={handleClose}>
            <h1>Modal</h1>
          </Modal>
        )
      }
      <ButtonPrimary text='Click me!' onClick={handleOpen} />
      <ButtonSecondary text='Click me!' />
      <Input label='Label' name='name' type='text' placeholder='Placeholder' value='Value' handler={() => {}} />
    </>
  )
}

export default Home
