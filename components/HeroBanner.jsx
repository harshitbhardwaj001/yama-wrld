import React from "react";
import "./comp.css"

import { urlFor } from "../lib/client";
import Image from "next/image";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <Image
        src={urlFor(heroBanner.image)}
        alt="avatar"
        className="hero-banner-image"
      />

      {/* <div>
        <Link href='/product/ID'>
          <button type='button'>{heroBanner.buttonText}</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div> */}
      {/* <div
        class="framer-s81ukf hidden-i3ud90"
        data-framer-name="Line Flow Left Frame"
        name="Line Flow Left Frame"
      >
        <div
          class="framer-8vcjje-container"
          data-framer-name="Line Flow Left"
          name="Line Flow Left"
        >
          <div style={{ height: '100%', width: '100%' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 455 1754"
              width="455"
              height="1754"
              preserveAspectRatio="xMidYMid slice"
              style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)' }}

            >
              <defs>
                <clipPath id="__lottie_element_94">
                  <rect width="455" height="1754" x="0" y="0"></rect>
                </clipPath>
                <linearGradient
                  id="__lottie_element_101"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="195.51600646972656"
                  y1="-857.7269897460938"
                  x2="199.73399353027344"
                  y2="523.906005859375"
                >
                  <stop offset="0%" stop-color="rgb(255,168,107)"></stop>
                  <stop offset="17%" stop-color="rgb(254,163,181)"></stop>
                  <stop offset="33%" stop-color="rgb(254,159,254)"></stop>
                  <stop offset="50%" stop-color="rgb(210,207,225)"></stop>
                  <stop offset="67%" stop-color="rgb(165,255,197)"></stop>
                  <stop offset="83%" stop-color="rgb(210,211,152)"></stop>
                  <stop offset="100%" stop-color="rgb(255,168,107)"></stop>
                </linearGradient>
                <linearGradient
                  id="__lottie_element_105"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="195.51600646972656"
                  y1="-857.7269897460938"
                  x2="199.73399353027344"
                  y2="523.906005859375"
                >
                  <stop offset="0%" stop-color="rgb(255,168,107)"></stop>
                  <stop offset="17%" stop-color="rgb(254,163,181)"></stop>
                  <stop offset="33%" stop-color="rgb(254,159,254)"></stop>
                  <stop offset="50%" stop-color="rgb(210,207,225)"></stop>
                  <stop offset="67%" stop-color="rgb(165,255,197)"></stop>
                  <stop offset="83%" stop-color="rgb(210,211,152)"></stop>
                  <stop offset="100%" stop-color="rgb(255,168,107)"></stop>
                </linearGradient>
              </defs>
              <g clip-path="url(#__lottie_element_94)">
                <g
                  transform="matrix(1,0,0,1,227.5,877)"
                  opacity="1"
                  style={{display: "block"}}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path fill="rgb(255,0,0)" fill-opacity="1" d="M0 0"></path>
                    <path
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke="rgb(255,255,255)"
                      stroke-opacity="1"
                      stroke-width="2"
                      d="M0 0"
                    ></path>
                    <path
                      stroke="url(#__lottie_element_105)"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke-opacity="1"
                      stroke-width="2"
                      d="M0 0"
                    ></path>
                    <path
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke="rgb(254,162,200)"
                      stroke-opacity="1"
                      stroke-width="2"
                      d=" M114.5,-857 C114.5,-857 114.5,-683 114.5,-655 C114.5,-627 90.5,-609 62.5,-609 C34.5,-609 17.5,-609 1.5,-609 C-32.5,-609 -48.5,-589 -48.5,-555 C-48.5,-534.8909912109375 -48.5,-252.14199829101562 -48.5,-15 C-48.5,33 -63.5,44.51300048828125 -98.19599914550781,44.51300048828125 C-137.5,44.51300048828125 -151.5,55 -151.5,109 C-151.5,226.0540008544922 -151.5,295.9200134277344 -151.5,303 C-151.5,337 -127.5,361 -95.5,361 C-76.68299865722656,361 96.5,361 120.5,361 C168.5,361 184.5,381 184.5,425 C184.5,453 184.5,531 184.5,531"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,227.5,877)"
                  opacity="1"
                  style={{display: "block"}}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="rgb(254,162,200)"
                      stroke-opacity="1"
                      stroke-width="5.5"
                      d=" M114.5,-834.6069946289062 C114.5,-822.7659912109375 114.5,-807.1389770507812 114.5,-789.9920043945312"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="rgb(254,162,200)"
                      stroke-opacity="1"
                      stroke-width="5.5"
                      d=" M-48.5,-335.0509948730469 C-48.5,-320.5710144042969 -48.5,-305.6700134277344 -48.5,-290.4410095214844"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="rgb(254,162,200)"
                      stroke-opacity="1"
                      stroke-width="5.5"
                      d=" M-151.5,220.75100708007812 C-151.5,238.28900146484375 -151.5,253.218994140625 -151.5,265.3689880371094"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path fill="rgb(255,0,0)" fill-opacity="1" d="M0 0"></path>
                    <path
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke="rgb(255,255,255)"
                      stroke-opacity="1"
                      stroke-width="2"
                      d="M0 0"
                    ></path>
                    <path
                      stroke="url(#__lottie_element_101)"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke-opacity="1"
                      stroke-width="2"
                      d="M0 0"
                    ></path>
                    <path
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="4"
                      stroke="rgb(254,162,200)"
                      stroke-opacity="1"
                      stroke-width="2"
                      d=" M114.5,-857 C114.5,-857 114.5,-683 114.5,-655 C114.5,-627 90.5,-609 62.5,-609 C34.5,-609 17.5,-609 1.5,-609 C-32.5,-609 -48.5,-589 -48.5,-555 C-48.5,-534.8909912109375 -48.5,-252.14199829101562 -48.5,-15 C-48.5,33 -63.5,44.51300048828125 -98.19599914550781,44.51300048828125 C-137.5,44.51300048828125 -151.5,55 -151.5,109 C-151.5,226.0540008544922 -151.5,295.9200134277344 -151.5,303 C-151.5,337 -127.5,361 -95.5,361 C-76.68299865722656,361 96.5,361 120.5,361 C168.5,361 184.5,381 184.5,425 C184.5,453 184.5,531 184.5,531"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroBanner;
