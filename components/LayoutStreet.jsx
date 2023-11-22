import React from 'react'
import Head from 'next/head'
import Navbar from './NavbarStreet'
import Footer from './Footer'

const LayoutStreet = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Yama Street</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default LayoutStreet