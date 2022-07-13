import React from 'react'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './layout.css'

const Layout = (props) => {
  return (
    <>
        <Header/>
        <main>
          <Routers />
        </main>
        <Footer/>
    </>
  )
}

export default Layout