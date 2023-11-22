import React from 'react'
import "./index.css";
import Navbar from '../../components/Navbar';
import Head from 'next/head';
import Hero from '../../components/Hero';
import About from '../../components/About.jsx';
import Steps from '../../components/Steps';
import Footer from '../../components/FooterC';


const CitizenPass = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <Head>
        <title>Citizen Pass - Yama Wrld</title>
      </Head>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Steps />
      <div className='relative z-0'>
      <Footer />
      </div>
    </div>
  )
}

export default CitizenPass