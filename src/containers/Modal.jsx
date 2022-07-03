import React from 'react'
import { Overlay, ModalContainer } from '@styles/containers/ModalStyle'

const Modal = ({ children }) => {
  return (
    <>
      <Overlay>
        <ModalContainer>
          {children}
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default Modal
