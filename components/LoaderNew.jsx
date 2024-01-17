import React from "react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const LoaderNew = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          return 100;
        }
      });
    }, 25);
    gsap.to(".count", {
      duration: 1,
      opacity: 0,
      ease: "power4.inOut",
      delay: 3,
    });
    gsap.to(".progressBar", {
      duration: 1,
      opacity: 0,
      ease: "power4.inOut",
      delay: 3,
    });
    gsap.to(".loading", {
      duration: 1,
      height: 0,
      ease: "power4.out",
      delay: 4,
    });
  }, []);

  return (
    <div>
      <div className="loading w-full h-full bg-[#121212] flex justify-center items-center absolute top-0">
        <div className="follow absolute bg-[#f48049] h-[2px] w-0 left-0 z-[2]"></div>
        <div
          className={`progressBar absolute left-0 h-[2px] bg-white transition-all duration-[0.4s] ease-out w-0`}
          style={{ width: `${counter}%` }}
        ></div>
        <p className="count absolute text-[130px] text-white font-semibold">
          {counter}%
        </p>
      </div>
    </div>
  );
};

export default LoaderNew;
