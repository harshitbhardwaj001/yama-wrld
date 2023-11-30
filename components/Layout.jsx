import React from 'react'
import Navbar from './NavbarLight'
import FooterC from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer className='mt-[160px] w-full'>
        <FooterC/>
      </footer>
    </div>
  )
}

export default Layout