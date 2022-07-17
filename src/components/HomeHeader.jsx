import React from 'react'

import bismark from '../assets/images/bismark.jpg'

const HomeHeader = () => {
  return (
    <>
      <div className='flex-fluid home-container'>
        <div className='home-text-container'>
          <h1>Bismark Arroyo</h1>
          <p>Web Developer</p>
        </div>
        <div className='home-img-container flex-column'>
          <img className='home-img-round' src={bismark} alt='Bismark photo' />
        </div>
      </div>
    </>
  )
}

export default HomeHeader
