import React from 'react'
import Navbar from '../../components/Navbar'
import Team from "../../components/Team"
import Footer from '../../components/FooterC'
import LayoutEmpty from '../../components/LayoutEmpty'
// import "./teams.css"

const index = () => {
  return (
    <LayoutEmpty>
    <div>
        <div className='ml-[-1px]'>
          <Navbar />
        </div>
        <Team />
        <div className='relative z-0'>
            <Footer />
        </div>
    </div>
    </LayoutEmpty>
  )
}

export default index