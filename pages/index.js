import React, { useEffect, useState } from "react";
import Navbar from "../components/NavbarCareer";
import FooterC from "../components/FooterC";
import "./citizenpass/citizen.css";
import gsap from "gsap";
import anime from "../assets/anime.png";
import logo from "../assets/YamaLogo.png";
import infra from "../assets/infra.png";
import web3 from "../assets/web3.png";
import runner from "../assets/runner.png";
import icon from "../assets/icon1.gif";
import Cookies from "js-cookie";
import Image from "next/image";
import LoaderNew from "../components/LoaderNew";

const index = () => {
  const [clicked, setClicked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [slide, setSlide] = useState(1);
  const hasVisitedBefore = Cookies.get("visitedCitizenPassPage");
  console.log(hasVisitedBefore);
  useEffect(() => {
    if (!hasVisitedBefore) {
      setIsLoading(true);
      gsap.to(".main", {
        duration: 1,
        visibility: "visible",
        ease: "power4.inOut",
        delay: 4.5,
      });
      if (clicked) {
        gsap.to(".button", {
          opacity: 0,
          duration: 0.2,
          ease: "power4.inOut",
        });
        gsap.to(".overlay", {
          height: 0,
          duration: 0.5,
          ease: "power4.inOut",
          delay: 0.2,
        });
      }
      Cookies.set("visitedCitizenPassPage", "true", { expires: 1 / 48 });
    } else {
      setClicked(true);
      setIsLoaded(true);
    }
  }, [clicked]);
  console.log(clicked);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <>
      {isLoading && (
        <div className="block overflow-hidden fixed h-full w-full">
          <LoaderNew />
        </div>
      )}
      <div className={`main ${isLoading ? "invisible" : ""}`}>
        {!isLoaded && (
          <div
            className={`overlay bg-about-pattern bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] absolute z-[100]`}
          >
            <Image
              src={logo}
              width={300}
              height={300}
              className="mx-auto mt-[2rem]"
            />
            <h1 className="text-[1.6rem] font-extralight text-white text-center mt-[1rem]">
              A lore driven web3 ecosystem
            </h1>
            <div className="flex bg-[#fff] rounded-md w-[20rem] items-center justify-center mt-[30rem] ml-[38.5rem] px-[2rem] py-[0.3rem] xs:max-md:ml-[6rem] xs:max-md:w-[12rem] xs:max-md:mt-[20rem] hover:bg-[#eee] button">
              <button
                className="text-black text-[2rem] xs:max-md:text-[1.4rem] font-extralight text-center"
                onClick={() => handleClick()}
              >
                <h1>Enter Yama Wrld</h1>
              </button>
            </div>
          </div>
        )}
        <div className={`${clicked ? "" : "hidden"}`}>
          <div>
            <Navbar />
          </div>
          <div className="min-h-[80vh] relative top-[5rem] xs:max-md:overflow-hidden">
            <div className="border-black border-[1px] w-[94vw] xs:max-md:ml-[0.7rem] xs:max-md:mt-[4rem] absolute mt-[8rem] ml-[2.2rem]"></div>
            <div className="w-[95vw] bg-[#E6E7E7] h-[90vh] flex xs:max-md:flex-col justify-center items-center mx-auto rounded-lg gap-0">
              <h1 className="text-black text-[9rem] xs:max-md:text-[2.5rem] text-left font-extralight xs:max-md:mt-[8rem] xs:max-md:text-center xs:max-md:ml-[0rem] tracking-wider md:leading-[8rem] ml-[4rem]">
                <span className="text-[#3C88C8]">EMBARK ON</span> A <br /> NEW
                <span className="text-[#2D9BF0]"> ADVENTURE</span>
              </h1>
              <Image
                src={runner}
                width={500}
                height={500}
                className="mr-[-2rem] mt-[15rem] xs:max-md:mt-[1rem] xs:max-md:mr-[-5rem] xs:max-md:w-[400px] z-[10]"
              />
            </div>
            <div className="w-[94.5vw] h-[10vh] border-black border-[1px] border-l-0 border-r-0 ml-[2.2rem] xs:max-md:ml-[0.7rem] absolute mt-[-8rem] overflow-hidden">
              <div className="w-[200vw] animate-marquee text-[2rem] mt-[0.8rem] text-black ">
                YAMA STREET COMING SOON 🌏 कुछ आ रहा है 🌏 YAMA STREET COMING
                SOON 🌏 कुछ आ रहा है 🌏 YAMA STREET COMING SOON 🌏 कुछ आ रहा है
                🌏 YAMA STREET COMING SOON 🌏 कुछ आ रहा है
              </div>
            </div>
            <div className="w-[40vw] h-[7vh] flex gap-0 mt-[5rem] items-center justify-center mb-[0.55rem] xs:max-md:mb-[0.2rem] ml-[1.9rem] xs:max-md:ml-[5.2rem]">
              <div
                className={`px-[2.7rem] py-[1rem] xs:max-md:px-[1.5rem] text-black text-[1.3rem] border-[2px] border-b-[0px] rounded-t-xl ${
                  slide === 1 ? "bg-[#0080C6] border-[#0080C6]" : "border-black"
                } hover:bg-[#0080C6] ease-in-out transition-all duration-300`}
                onClick={() => setSlide(1)}
              >
                <button className="flex justify-center items-center gap-2">
                  <h1 className="font-extralight text-[1.7rem] xs:max-md:text-[0.9rem]">
                    Anime
                  </h1>
                  <Image
                    src={anime}
                    width={30}
                    height={30}
                    className="xs:max-md:w-[20px]"
                  />
                </button>
              </div>
              <div
                className={`px-[3rem] py-[1rem] text-black text-[1.3rem] xs:max-md:px-[1.5rem] border-[2px] border-b-[0px] rounded-t-xl ${
                  slide === 2 ? "bg-[#FFE075] border-[#FFE075]" : "border-black"
                } hover:bg-[#FFE075] ease-in-out transition-all duration-300`}
                onClick={() => setSlide(2)}
              >
                <button className="flex justify-center items-center gap-2">
                  <h1 className="font-extralight text-[1.7rem] xs:max-md:text-[0.9rem]">
                    Infrastructure
                  </h1>
                  <Image
                    src={infra}
                    width={30}
                    height={30}
                    className="xs:max-md:w-[20px]"
                  />
                </button>
              </div>
              <div
                className={`px-[3rem] py-[1rem] xs:max-md:px-[1.5rem] text-black text-[1.3rem] border-[2px] border-b-[0px] rounded-t-xl ${
                  slide === 3 ? "bg-[#66FFCC] border-[#66FFCC]" : "border-black"
                } hover:bg-[#66FFCC] ease-in-out transition-all duration-300`}
                onClick={() => setSlide(3)}
              >
                <button className="flex justify-center items-center gap-2">
                  <h1 className="font-extralight text-[1.7rem] xs:max-md:text-[0.9rem]">
                    Web3
                  </h1>
                  <Image
                    src={web3}
                    width={30}
                    height={30}
                    className="xs:max-md:w-[20px]"
                  />
                </button>
              </div>
            </div>
            <div
              className={`w-[95vw] h-[80vh] ${
                slide === 1
                  ? "bg-[#0080C6] bg-1-bg bg-top bg-cover bg-opacity-10 bg-no-repeat"
                  : slide === 2
                  ? "bg-[#FFE075] bg-2-bg bg-top bg-cover bg-opacity-10 bg-no-repeat"
                  : "bg-[#66FFCC] bg-3-bg bg-top bg-cover bg-opacity-10 bg-no-repeat"
              } mx-auto rounded-lg flex flex-col items-center rounded-tl-none`}
            >
              <div>
                <Image
                  src={icon}
                  width={300}
                  height={300}
                  className="xs:max-md:w-[200px]"
                />
              </div>
              <div
                className={`border-[1px] w-[90vw] rounded-full mt-[2rem] ${
                  slide !== 1 ? "border-[#000]" : ""
                }`}
              ></div>
              {slide === 1 && (
                <div>
                  <h1 className="text-white text-[3rem] w-[90vw] text-center font-extralight mt-[3rem] xs:max-md:text-[1.8rem] xs:max-md:w-[85vw]">
                    {" "}
                    At the core of our brand is our lore. Yama Wrld is an
                    original story expanding on anime culture with its own
                    manga.
                  </h1>
                </div>
              )}
              {slide === 2 && (
                <div>
                  <h1 className="text-black text-[3rem] w-[90vw] text-center font-extralight mt-[3rem] xs:max-md:text-[1.8rem] xs:max-md:w-[85vw]">
                    {" "}
                    The future of collectibles is tokenization. Yama Wrld is
                    building a bridge between the physical and digital realm.
                  </h1>
                </div>
              )}
              {slide === 3 && (
                <div>
                  <h1 className="text-black text-[3rem] w-[90vw] text-center font-extralight mt-[2.5rem] xs:max-md:text-[1.5rem] xs:max-md:w-[80vw]">
                    {" "}
                    The Citizen Pass is a genesis NFT collection in Yama Wrld
                    for our earliest supporters. This collectible has a series
                    of different perks for holders in the Yama ecosystem.
                  </h1>
                </div>
              )}
            </div>
          </div>
          <div className="relative z-0">
            <FooterC />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
