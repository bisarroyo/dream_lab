import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Layout from '@containers/Layout'
import Home from '@pages/Home'
import SignIn from '@pages/SignIn'
import SignUp from '../pages/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
