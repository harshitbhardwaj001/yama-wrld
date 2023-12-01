import React from 'react'
import Navbar from '../components/NavbarC.jsx';
import Head from 'next/head';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Steps from '../components/Steps.jsx';
import Footer from '../components/FooterC.jsx';
import LayoutEmpty from '../components/LayoutEmpty.jsx';
import "./citizen.css";


const CitizenPass = () => {
  return (
    <LayoutEmpty>
    <div className='relative z-0 bg-primary'>
      <Head>
        <title>Citizen Pass - Yama Wrld</title>
      </Head>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <div>
        <About />
        <Steps />
      </div>
      <div>
      <Footer />
      </div>
    </div>
    </LayoutEmpty>
  )
}

export default CitizenPass