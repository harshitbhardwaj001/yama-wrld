import React, { useEffect, useState } from "react";
import Image from "next/image";
import Milk from "../assets/milk.png";
import Pixel from "../assets/pixel3.png";
import gsap from "gsap";
import axios from "axios";

const Popup = (props) => {
  useEffect(() => {
    gsap.from(".milk", {
      duration: 1,
      scale: 0.5,
      ease: "power4.inOut",
    });
    gsap.from(".box", {
      duration: 1,
      left: "200px",
      autoAlpha: 0,
      scale: 0.5,
      ease: "power4.inOut",
      delay: 0.5,
    });
    gsap.from(".text", {
      duration: 1,
      left: "200px",
      autoAlpha: 0,
      scale: 0.5,
      ease: "power4.inOut",
      delay: 0.5,
    });
    gsap.from(".email", {
      duration: 1,
      left: "200px",
      autoAlpha: 0,
      scale: 0.5,
      ease: "power4.inOut",
      delay: 0.5,
    });
  });

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;

    const apiUrl = `https://pi7rt7kb.api.sanity.io/v1/data/mutate/production`;

    axios
      .post(
        apiUrl,
        {
          mutations: [
            {
              create: {
                _type: "newsletterSubscription",
                email: email,
                timestamp: new Date().toISOString(),
              },
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer sk095xxpW3g8FihiAXXBIpGTJB9VUCVoTAP2CpX2bBY3upZ0O0Tf7BJi1mraAB9vhJURPekmvjusRKmdwhMSEDUdEVFaMTFcoKAQknIOaylCf6JfDkXcHN4kZi9muqpD2VfAcdEfvL19nGXD6hqCQd2yluOSJBc4St3Fr88kvy4Jxh1oq19o`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., show a success message
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
      props.setTrigger(false);
  }
  return props.trigger ? (
    <div>
      <div className="popup fixed z-[100] top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.2)] flex flex-col justify-center items-center">
        <Image
          src={Pixel}
          alt="pixel"
          className="box absolute xl:w-[400px] lg:w-[400px] sm:w-[250px] xs:w-[250px] xl:right-[8rem] xl:top-[13.5rem] xs:top-[22rem] transform"
        />

        <h3 className="text absolute text-center xl:w-[320px] lg:w-[350px] md:w-[250px] sm:w-[200px] xs:w-[200px] xl:text-[1rem] lg:text-[1rem] xs:text-[0.7rem] xl:right-[10.8rem] xl:top-[17.4rem] xs:top-[24.2rem] font-medium text-black">
          Subscribe to our newsletter and stay upto date on all things Yama.
        </h3>
        <div className="email absolute lg:w-[330px] xs:w-[230px] xl:top-[15rem] xl:right-[10.3rem] xs:top-[2rem] text-[1rem] text-center rounded-lg shadow flex flex-col justify-center">
          <div className="flex items-center justify-between p-4 md:p-5">
            <button
              type="button"
              className="end-2.5 ml-[-10px] mb-[40px] xl:mt-[-3px] xs:mt-[20rem] text-black bg-transparent rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center"
              onClick={() => {
                props.setTrigger(false);
              }}
            >
              <svg
                className="lg:w-3 lg:h-3 xs:w-2 xs:h-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="p-4 md:p-5 xl:mt-[-1.3rem] xs:mt-[-2rem]">
            <form className="xl:space-y-4 lg:space-y-4 xs:space-y-1" onSubmit={handleSubmit}>
              <div>
                {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full xl:p-2.5 lg:p-2.5 xs:p-1 dark:bg-black dark:border-black dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@domain.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 xl:py-2.5 lg:py-2.5 xs:py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <Image
          src={Milk}
          alt="milk"
          className="milk absolute xl:w-[300px] lg:w-[300px] sm:w-[200px] xs:w-[150px] xl:mt-[30rem] xl:ml-[80rem] lg:mt-[30rem] lg:ml-[50rem] xs:mt-[30rem] xs:ml-[14rem]"
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
