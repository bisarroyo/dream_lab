import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children, onClose, title }) => {
  const [showModal, setShowModal] = useState(false)

  // modal handler
  const handleClose = () => {
    setShowModal(false)
  }
  // const handleOpen = () => {
  //   setShowModal(true)
  // }
  return (
    <>
      {showModal
        ? ReactDOM.createPortal(
          <div className='modal'>
            <div className='modal-content'>
              <button className='btn' onClick={handleClose}>x</button>
              <h1>{title}</h1>
              {children}
            </div>
          </div>,
          document.getElementById('modal-root')
          )
        : null}
    </>
  )
}

export default Modal
