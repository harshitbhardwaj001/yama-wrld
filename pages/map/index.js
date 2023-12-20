import React, { useEffect, useState } from "react";
import Head from "next/head";
import card from "../../assets/card3.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/NavbarCareer";
// import "../styles/globals.css"
import "./home.css";
import LayoutEmpty from "../../components/LayoutEmpty";
import Popup from "../../components/Popup";

const Home = () => {
  const [bPopup, setBpopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBpopup(true);
    }, 2500)
  }, [])

  return (
    <LayoutEmpty>
      <Head>
        <title>Yama Wrld</title>
      </Head>
      <div className="ml-[-10px] pb-[10px]">
        <Navbar />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.2,
            },
          },
        }}
      >
        <div className="xl:mt-[130px] lg:mt-[100px] md:mt-[140px] sm:mt-[200px] xs:mt-[160px]">
          <h2 className="xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.2rem] xs:text-[1rem] text-[#FFE075] relative z-100 xl:top-[5rem] lg:top-[5.2rem] md:top-[8rem] sm:top-[5.5rem] xs:top-[4.2rem] text-center tracking-widest">
            <span className="text-[#FFE075]">&#9888;</span> Something&apos;s
            Cooking <span className="text-[#FFE075]">&#9888;</span>
          </h2>
          <Image
            src={card}
            alt="card"
            className="mx-auto xl:w-[550px] lg:w-[550px] md:w-[600px] sm:w-[450px] xs:w-[350px] lg:h-[350px] md:h-[400px] sm:h-[300px] xs:h-[220px] z-1"
          />
          <p className="xl:w-[31rem] lg:w-[31rem] md:w-[34rem] sm:w-[25rem] xs:w-[20rem] lg:text-[1.4rem] md:text-[1.2rem] xs:text-[.8rem] text-center mx-auto lg:bottom-[15.5rem] md:bottom-[15rem] sm:bottom-[12rem] xs:bottom-[8.8rem] text-white relative z-100 tracking-wide">
            This section of the website is currently under construction, it may
            or may not blow your mind. Most likely the former. If you like
            having your mind blown, check back soon.
          </p>
        </div>
      </motion.div>
      {/* <Popup trigger={bPopup} setTrigger={setBpopup} /> */}

      {/* </Layout> */}
    </LayoutEmpty>
  );
};

export default Home;
