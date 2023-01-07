import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AcikSecimLogoInv from "../public/aciksecimorg-logo-inv.png";
import AcikSecimLogo from "../public/aciksecimorg-logo.png";
const Nav = () => {
  const [navColor, setNavColor] = useState(false);
  const [mobMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 5 ? setNavColor(true) : setNavColor(false);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-30 top-0 text-white ${navColor ? 'bg-white shadow duration-200 ease-in' : 'duration-200 ease-out'}`}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center z-50">
          <Image
              src={navColor || mobMenu ? AcikSecimLogo : AcikSecimLogoInv}
              height={40}
              width={240}
              alt="Açık Seçim Logo"
          />
        </div>

        <div className="block lg:hidden pr-4">
          <button onClick={() => setMobileMenu(!mobMenu) } className={`absolute top-5 right-4 items-center z-50 ${navColor || mobMenu ? 'text-brandColor' : ' text-gray'} focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}>
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`${mobMenu ? "Flex" : "hidden"} min-h-screen absolute top-0 bg-white text-gray-700 z-40 w-full max-h-full pt-16 justify-end `}>
          Mobile Menu
          sdfsdf
          sdfsdfsdfsdf
          sdfdsf
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Biz kimiz?</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Nasıl çalışır?</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Gönüllü ol!</a>
            </li>
          </ul>
          <button
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Bize Katıl
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    </>
  )
}

export default Nav