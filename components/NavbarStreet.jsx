import React, { useState } from 'react'
import Link from 'next/link'
import "./comp.css"
import '../styles/globals.css'
import {AiOutlineShopping} from 'react-icons/ai';
import { navLinks } from "../contants";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <div className='navbar-container px-7'>
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

      {/* <button type='button' className='cart-icon' onClick="">
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button> */}
      </div>
    </div>
  )
}

export default Navbar