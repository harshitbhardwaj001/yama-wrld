import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "../contants";
import logo from "../assets/logo.png";
import menu from "../assets/menuB.svg";
import close from "../assets/closeB.svg";
import Image from "next/image";
import "./comp.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`lg:px-9 sm:px-[2rem] top w-full flex items-center py-5 fixed bg-[#FAF9F6] z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-[85rem] mx-0">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={36}
            height={36}
            style={{ width: "auto", height: "auto" }}
            className="ml-4"
          />
          <p className="text-black text-[18px] font-bold cursor-pointer sm:block hidden">
            Yama Wrld
          </p>
        </Link>
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
            className="cursor-pointer mr-4 pr-4 fill-black"
            width={36}
            height={36}
            style={{ width: "auto", height: "auto", fill: "black"}}
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
      </div>
    </nav>
  );
};

export default Navbar;
