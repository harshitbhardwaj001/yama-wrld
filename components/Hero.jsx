import React from 'react'
import {motion} from 'framer-motion';
import cpass from "../assets/c-pass-static.png"
import Image from 'next/image';
import "./comp.css"

const Hero = () => {
  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`sm:px-8 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center xs:mt-1 lg:mt-5 md:mt-5 sm:mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#EE3124]' />
            <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div>
        <div className='lg:w-[70rem] xs:w-[40rem] xs:mx-auto'>
          <h1 className={'text-white xl:text-[74px] lg:text-[50px] sm:text-[54px] xs:text-[40px] text-[40px] lg:leading-[98px] lg:mt-2 md:mt-2 sm:mt-2 xs:mt-0 '}>Get Your <span className='text-[#EE3124]'>Citizen Pass</span></h1>
          <p className='font-medium xl:text-[30px] lg:text-[25px] sm:text-[26px] xs:text-[15px] text-[16px] lg:leading-[40px] mt-2 text-white-100'>
          Citizen Passes are a limited supply collectible available to early adopters of Yama. They will live on the Ethereum Blockchain as a unique non-fungible token.
          </p>
        </div>
          <div className='relative w-full mx-auto top-[8rem] md:block lg:hidden sm:hidden xs:hidden'>
            <Image src={cpass} alt='cpass' className='mx-auto w-[600px]' width={500} height={500}/>
          </div>
      </div>
      <div className='relative z-99 mx-auto aspect-w-16 aspect-h-9 xl:top-[22rem] lg:top-[23rem] xs:top-[28rem] lg:block md:hidden sm:hidden xs:block'>
      <Image src={cpass} alt='cpass' className='mx-auto md:w-[400px] xl:w-[400px] lg:w-[350px] xs:w-[250px]' width={500} height={500}/>
      </div>

      <div className='relative xl:top-[25.5rem] lg:top-[23.5rem] md:top-[36rem] sm:top-[36rem] xs:hidden w-full z-100 lg:flex md:flex sm:flex justify-center items-center'>
        <a href="#about"> 
          <div className="xl:w-[35px] xl:h-[54px] lg:h-[44px] md:w-[35px] md:h-[54px] sm:w-[35px] sm:h-[54px] xs:w-[30px] xs:h-[45px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative z-100">
            <motion.div 
              animate={{
                y:[0, 20, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      
      {/* <ComputersCanvas /> */}

    </section>
    
  )
}

export default Hero