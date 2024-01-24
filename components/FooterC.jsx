import React from "react";
import "./comp.css";
import Link from "next/link";

const FooterC = () => {
  return (
    <footer className="bg-black rounded-lg shadow m-4 dark:bg-black mt-[120px]">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-white">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Yama Wrld
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Home
            </Link>
          </li>
          <li>
            <Link href="/citizenpass" className="hover:underline me-4 md:me-6">
              Citizen Pass
            </Link>
          </li>
          <li>
            <Link href="/street" className="hover:underline me-4 md:me-6">
              Yama-Street
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:underline me-4 md:me-6">
              Team
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:underline">
              Career
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterC;
