import React from 'react'
import ButtonPrimary from '@components/ButtonPrimary'
import ButtonSecondary from '@components/ButtonSecondary'
import Input from '@components/Input'
// import Modal from '@containers/Modal'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* <Modal>
        <h1>Modal</h1>
      </Modal> */}
      <ButtonPrimary text='Click me!' />
      <ButtonSecondary text='Click me!' />
      <Input label='Label' name='name' type='text' placeholder='Placeholder' value='Value' handler={() => {}} />
    </div>
  )
}

export default Home
