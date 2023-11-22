import React from 'react'

const FooterC = () => {
  return (
    <footer className="bg-primary rounded-lg shadow m-4 dark:bg-gray-800 mt-[120px]">
    <div className="w-full mx-auto max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Yama Wrld</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Yama-Street</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Team</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Career</a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default FooterC