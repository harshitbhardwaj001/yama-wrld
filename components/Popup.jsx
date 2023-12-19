import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Milk from "../assets/milk.png"
import Pixel from "../assets/pixel3.png"
import gsap from 'gsap';

const Popup = (props) => {
    useEffect(() => {
        gsap.from(".milk", {
            duration: 1,
            scale: 0.5,
            ease: "power4.inOut"
        })
        gsap.from(".box", {
            duration: 1,
            left: "200px",
            autoAlpha: 0,
            scale: 0.5,
            ease: "power4.inOut",
            delay: 0.5,
        })
        gsap.from(".text", {
            duration: 1,
            left: "200px",
            autoAlpha: 0,
            scale: 0.5,
            ease: "power4.inOut",
            delay: 0.5,
        })
        gsap.from(".email", {
            duration: 1,
            left: "200px",
            autoAlpha: 0,
            scale: 0.5,
            ease: "power4.inOut",
            delay: 0.5,
        })
    })
  return (props.trigger) ? (
    <div>
        <div className="popup fixed z-[100] top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.2)] flex flex-col justify-center items-center">
        
        <Image src={Pixel} alt='pixel' width={450} className='box absolute mt-[-6rem] ml-[53rem] transform' />
        
        <h3 className='text absolute w-[350px] mt-[-15.5rem] text-[1rem] text-center ml-[52.7rem] font-medium text-black'>Subscribe to our newsletter and stay upto date on all things.</h3>
        <div className="email absolute w-[380px] mt-[-10rem] ml-[53rem] text-[1rem] text-center rounded-lg shadow flex flex-col justify-center">
            <div className="flex items-center justify-between p-4 md:p-5">
                
                <button type="button" className="end-2.5 ml-[-10px] mb-[40px] mt-[-3px] text-black bg-transparent rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center" onClick={() => {props.setTrigger(false)}}>
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
            </div>
            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                    <div>
                        {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-black dark:placeholder-gray-400 dark:text-white" placeholder="name@domain.com" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                    
                </form>
            </div>
        </div>
        <Image src={Milk} alt='milk' width={300} className='milk absolute mt-[30rem] ml-[80rem]'/>
    </div>
    
    </div>
  ) : "";
}

export default Popup