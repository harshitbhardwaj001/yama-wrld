import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavbarLight.jsx";
import Head from "next/head";
import Hero from "../../components/Hero.jsx";
import About from "../../components/About.jsx";
import Steps from "../../components/Steps.jsx";
import Footer from "../../components/FooterC.jsx";
import LayoutEmpty from "../../components/LayoutEmpty.jsx";
import "./citizen.css";
import Loader from "../../components/Loader.jsx";
import gsap from "gsap";
import Cookies from "js-cookie";
import LoaderNew from "../../components/LoaderNew.jsx";

const CitizenPass = () => {
  return (
    <>
      <div className="container1 relative z-0 overflow-hidden">
        <Head>
          <title>Citizen Pass - Yama Wrld</title>
        </Head>
        <div
          className={`main relative bg-hero-pattern bg-cover bg-no-repeat bg-center`}
        >
          <div>
            <Navbar />
          </div>

          <Hero />
        </div>
        <div className={`container2`}>
          <About />
          <Steps />
        </div>
        <div className={`container2`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CitizenPass;
