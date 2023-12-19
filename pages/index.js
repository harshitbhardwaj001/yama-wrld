import React, { useEffect } from 'react'
import Navbar from '../components/NavbarC.jsx';
import Head from 'next/head';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Steps from '../components/Steps.jsx';
import Footer from '../components/FooterC.jsx';
import LayoutEmpty from '../components/LayoutEmpty.jsx';
import "./citizen.css";
import Loader from '../components/Loader.jsx';
import gsap from 'gsap';


const CitizenPass = () => {
  useEffect(() => {
    gsap.fromTo(".main", {
      duration: 2,
      left: "100%",
      scale: 0.5,
      ease: "power2.inOut",
      delay: 4,
    }, {
      duration: 2,
      left: "50%",
      scale: 0.5,
      transform: "translateX(-50%)",
      ease: "power4.inOut",
      delay: 4,
    })
    gsap.to(".main", {
      duration: 2,
      scale: 1,
      ease: "power4.inOut",
      delay: 7.5,
    })
    gsap.to(".container1", {
      duration: 0.3,
      autoAlpha: 1,
      delay: 7.8,
    })
    gsap.to(".container2", {
      display: "block",
    }, "<")
  }, []);
  return (
    <>
    <div className='block overflow-hidden fixed h-full w-full'>
      <Loader />
    </div>
    <div className='container1 invisible relative z-0 bg-primary overflow-hidden'>
      <Head>
        <title>Citizen Pass - Yama Wrld</title>
      </Head>
      <div className='main relative bg-hero-pattern bg-cover bg-no-repeat bg-center visible'>
        <Navbar />
        <Hero />
      </div>
      <div className='container2 hidden'>
        <About />
        <Steps />
      </div>
      <div className='container2 hidden'>
      <Footer />
      </div>
    </div>
    </>
  )
}

export default CitizenPass