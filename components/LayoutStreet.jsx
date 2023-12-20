import React from 'react'
import Head from 'next/head'
import Navbar from './NavbarLight'
import Footer from './Footer'
import "./comp.css"

const LayoutStreet = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Yama Street</title>
      </Head>
      <header className='mt-[-10px] ml-[-20px] pb-[6rem]'>
        <Navbar />
      </header>
      <main className='main-container2'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default LayoutStreet