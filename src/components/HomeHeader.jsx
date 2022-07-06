import React from 'react'
import bismark from '../assets/images/bismark.jpg'

const HomeHeader = () => {
  return (
    <>
      <div className='home-header'>
        <img className='home-header__image' src={bismark} alt='Bismark photo' />
        <h1 className='home-header__title title-h1'>
          Bismark Arroyo
        </h1>
      </div>
    </>
  )
}

export default HomeHeader
