import React from 'react'
import PortfolioItem from '@components/PortfolioItem'

const Portfolio = () => {
  return (
    <div className='container-fluid'>
      <h2>Portfolio</h2>
      <div className='flex-fluid'>
        <PortfolioItem />
      </div>
    </div>
  )
}

export default Portfolio
