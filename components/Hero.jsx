import React from 'react'
import {motion} from 'framer-motion';
import cpass from "../assets/c-pass-static.png"
import Image from 'next/image';
import "./comp.css"

const Hero = () => {
  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`sm:px-8 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#EE3124]' />
            <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div>
        <div className='lg:w-[70rem]'>
          <h1 className={'font-black text-white lg:text-[74px] sm:text-[54px] xs:text-[44px] text-[40px] lg:leading-[98px] mt-2'}>Get Your <span className='text-[#EE3124]'>Citizen Pass</span></h1>
          <p className='font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100'>
          Citizen Passes are a limited supply collectible available to early adopters of Yama. They will live on the Ethereum Blockchain as a unique non-fungible token.
          </p>
        </div>
          <div className='relative z-99 w-full mx-auto top-[8rem] md:block lg:hidden sm:hidden xs:hidden'>
            <Image src={cpass} alt='cpass' className='mx-auto w-[600px]' width={500} height={500}/>
          </div>
      </div>
      <div className='relative z-99 w-full mx-auto lg:top-[22rem] lg:block md:hidden sm:hidden xs:hidden'>
      <Image src={cpass} alt='cpass' className='mx-auto md:w-[400px] lg:w-[500px]' width={500} height={500}/>
      </div>

      <div className='relative lg:top-[22.5rem] md:top-[36rem] sm:top-[36rem] xs:top-[36rem] w-full z-100 flex justify-center items-center'>
        <a href="#about"> 
          <div className="w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative z-100">
            <motion.div 
              animate={{
                y:[0, 24, 0]
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