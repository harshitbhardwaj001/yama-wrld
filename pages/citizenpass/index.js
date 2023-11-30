import React from 'react'
import Navbar from '../../components/NavbarC';
import Head from 'next/head';
import Hero from '../../components/Hero';
import About from '../../components/About.jsx';
import Steps from '../../components/Steps';
import Footer from '../../components/FooterC';
import LayoutEmpty from '../../components/LayoutEmpty.jsx';
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