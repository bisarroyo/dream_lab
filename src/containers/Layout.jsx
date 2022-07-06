import React from 'react'
import Footer from '@containers/Footer'

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navigation /> */}
      {children}
      <Footer />
    </>
  )
}

export default Layout
