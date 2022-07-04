import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Layout from '@containers/Layout'
import Home from '@pages/Home'
import SignUp from '../pages/SignUp'
import Blog from '@pages/Blog'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
