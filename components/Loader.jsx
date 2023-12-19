import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
    useEffect(() => {
        let counterElement = document.querySelector(".counter");
        let currentValue = 0;

        function updateCounter() {
            if(currentValue === 100) {
                return;
            }

            currentValue += Math.floor(Math.random() * 10) + 1;

            if(currentValue > 100) {
                currentValue = 100;
            }

            counterElement.textContent = currentValue + "%"
            let delay = Math.floor(Math.random() * 200) + 250;
            setTimeout(updateCounter, delay);
        }
        updateCounter();

        gsap.from(".circles", {
            duration: 2,
            top: "-100%",
            ease: "elastic.out",
            delay: 0.5,
        });

        gsap.to(".circle-inner", {
            duration: 1,
            width: "75px",
            height: "75px",
            ease: "power4.inOut",
            delay: 2
        })
        gsap.to(".circle-inner-rotator", {
            duration: 1,
            scale: 1,
            ease: "power4.inOut",
            delay: 2.5,
        })
        gsap.to(".circles", {
            duration: 1.5,
            rotation: 360,
            ease: "power4.inOut",
            delay: 3,
        })
        gsap.to(".blocked", {
            duration: 0.75,
            display: "block",
            height: "200px",
            ease: "power4.inOut",
            delay: 4,
        })
        gsap.to(".blocked", {
            duration: 0.75,
            width: "800px",
            ease: "power4.inOut",
            delay: 4.5,
        })
        gsap.to(".blocked", {
            duration: 1.5,
            width: "0px",
            ease: "power4.inOut",
            delay: 5,
        })
        gsap.to(".circles", {
            duration: 1.5,
            rotation: 0,
            ease: "power4.inOut",
            delay: 6.5,
        })
        gsap.to(".loader", {
            duration: 2.5,
            scale: 0,
            ease: "power4.inOut",
            delay: 7,
        })
    })
  return (
    <div className="loader fixed w-[100vw] h-[100vh] bg-[#000]">
        <h1 className="counter w-full h-full fixed flex justify-end items-end text-[#505050] px-[2rem] py-[4rem] text-[7vw] italic z-1000">0</h1>
        <div className="site-teaser">
            <span className="absolute top-0 right-10 text-[#505050] text-[2rem] italic">Entering Yama Wrld</span>
        </div>
        <div className="circles absolute left-[5rem] bottom-[5rem] w-[400px] h-[400px] rounded-[100%]">
            <div className="circle circle-outer absolute top-0 left-0 w-full  h-full border-[1px] border-[#505050] rounded-[100%]"></div>
            <div className="circle circle-inner absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] h-[400px] border-[1px] border-[#505050] rounded-[100%]"></div>
            <div className="circle-inner-rotator absolute top-0 left-[50%] translate-x-[-50%] w-[162.5px] h-[162.5px] border-[1px] scale-0 border-[#505050] rounded-[100%]"></div>  
            <div className="blocked absolute top-[-100px] left-[200px] w-0 h-0 hidden border-[1px] border-[#505050] origin-bottom"></div>      
        </div>
    </div>
  );
};

export default Loader;
