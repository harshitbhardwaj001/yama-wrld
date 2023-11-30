import React, { useState } from 'react'
import Link from 'next/link'
import "./comp.css"
import '../styles/globals.css'
import {AiOutlineShopping} from 'react-icons/ai';
import { navLinks } from "../contants";
import menu from "../assets/menuB.svg";
import close from "../assets/closeB.svg";
import Image from 'next/image';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className='navbar-container px-0'>
      <p className='logo'>
        <Link href='/'>Yama Street</Link>
      </p>
      <div className='flex gap-10'>
      <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#C13440]" : "text-black"
              } hover:text-[#C13440] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`/${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="cursor-pointer"
            width={36}
            height={36}
            style={{ width: "auto", height: "auto" }}
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px] `}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title)
              }}
            >
              <a href={`/${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>

      {/* <button type='button' className='cart-icon' onClick="">
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button> */}
      </div>
    </div>
  )
}

export default Navbar