import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-social'>
        <a href='https://www.facebook.com/bis.arroyo/' target='_blank' rel='noreferrer'>
          <AiFillFacebook />
        </a>
        <a href='https://www.instagram.com/bismark_ab/' target='_blank' rel='noreferrer'>
          <AiFillInstagram />
        </a>
        <a href='https://github.com/bisarroyo' target='_blank' rel='noreferrer'>
          <AiFillGithub />
        </a>
        <a href='https://www.linkedin.com/in/bismarkab/' target='_blank' rel='noreferrer'>
          <AiFillLinkedin />
        </a>
      </div>
      <div className='footer-copyright'>
        <p className='text-p'>Website desing by <strong>Bismark Arroyo</strong></p>
      </div>
    </div>
  )
}

export default Footer
