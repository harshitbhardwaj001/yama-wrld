import React from "react";
import { client } from "../../lib/client";
import HeroBanner from "../../components/HeroBanner";
import rickshaw from "../../assets/Rickshaw.png";
import message from "../../assets/text.svg";
import { FooterBanner, Product, LayoutStreet } from "../../components";
import "../../styles/globals.css";
import { motion } from "framer-motion";
import Image from "next/image";

const Street = ({ products, bannerData }) => {
  // const { scrollY } = useScroll();
  return (
      <LayoutStreet>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        <div className="my-[60px] mt-[11rem] mx-auto">
          <motion.div
            className="relative z-100 lg:top-[2rem] lg:ml-[2rem] md:top-[-5rem] md:ml-[2rem] sm:top-[-5rem] sm:ml-[5rem] message"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                scale: 0.5,
                translateX: 100,
                opacity: 0,
              },
              visible: {
                translateX: 1,
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                },
              },
            }}
            viewport={{ once: true }}
          >
          <div className="relative z-99">
          <Image
              src={message}
              alt="message"
              width={700}
              className="lg:-scale-y-100 md:-scale-y-100 sm:-scale-y-100 lg:w-[700px] md:w-[500px] sm:w-[300px] xs:w-[200px] xs:transform -scale-y-200"
            />
          </div>
            
            <div className="absolute z-100 lg:w-[30rem] lg:left-[7.5rem] lg:top-[8.5rem] md:w-[20rem] md:top-[5.5rem] md:left-[6rem] sm:w-[12rem] sm:top-[2.8rem] sm:left-[3.8rem] xs:w-[8rem] xs:top-[1.2rem] xs:left-[2.5rem]">
              <h1 className="text-white font-bold text-center lg:text-[1.3rem] md:text-[1.2rem] sm:text-[.8rem] xs:text-[.5rem]">
                Get in loser, we&apos;re going shopping. Yama Street is <br /> coming soon!
              </h1>
            </div>
          </motion.div>
          <Image
            src={rickshaw}
            alt="rickshaw"
            width={700}
            className="lg:mt-[-24rem] lg:ml-[40rem] lg:w-[700px] md:ml-[28rem] md:w-[500px] md:mt-[-24rem] sm:w-[300px] sm:ml-[22rem] sm:mt-[-16rem] xs:w-[300px] xs:mt-[-12rem] xs:mx-auto"
          />
        </div>

        {/* <div className='products-heading'>
        <h2>Latest Drop</h2>
        <p>Get your hands on the new drop before you miss it!!</p>
      </div>
      <div className='product-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
  
      <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
      </LayoutStreet>
  );
};

export default Street;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
