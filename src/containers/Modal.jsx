import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children, onClose, title }) => {
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='modal-content'>
        <button className='btn' onClick={onClose}>x</button>
        <h1>{title}</h1>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
