import React from 'react'
import Footer from '@containers/Footer'
// import Navigation from '@containers/Navigation'

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
