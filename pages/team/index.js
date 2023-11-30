import React from 'react'
import Navbar from '../../components/Navbar'
import Team from "../../components/Team"
import Footer from '../../components/FooterC'
// import "./teams.css"

const index = () => {
  return (
    <div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
        </div>
        <Team />
        <div className='relative z-0'>
            <Footer />
        </div>
    </div>
  )
}

export default index