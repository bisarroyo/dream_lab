import React from 'react'

// import components
import HomeHeader from '@components/HomeHeader'

// import containers
import TextBoxContainer from '@containers/TextBoxContainer'
import BlogHome from '@containers/BlogHome'
import Contact from '@containers/Contact'
import Portfolio from '@containers/Portfolio'
import News from '@containers/News'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <TextBoxContainer
        title='Web development'
        title1='CMS'
        text1='Development and maintenance of a CMS applications like wordpress and more.'
        title2='React'
        text2='Websites developed using react library and more.'
        title3='API'
        text3='Profesional APIs for your business.'
      />
      <Portfolio />
      <BlogHome />
      <News />
      <Contact />

    </>
  )
}

export default Home
