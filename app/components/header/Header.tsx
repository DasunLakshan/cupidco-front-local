"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import PrimaryButton from "../common/buttons/PrimaryButton";
import SecondaryButton from "../common/buttons/SecondaryButton";
import { AiOutlineMenu } from "react-icons/ai";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full h-20 bg-transparent backdrop-blur-md z-50">
      <div className="flex justify-between items-center h-full w-full p-10">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="130"
            height="85"
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden sm:flex font-playfair-display text-primary-purple font-bold">
          <Link href="/">
            <li className="ml-10 uppercase md:text-sm lg:text-lg hidden md:block lg:block">
              <span className="nav-link hover:border-b border-transparent hover:border-black border-b-2 cursor-pointer">
                Home
              </span>
            </li>
          </Link>
          <Link href="/pages/about">
            <li className="ml-10 uppercase md:text-sm lg:text-lg hidden md:block lg:block">
              <span className="nav-link hover:border-b border-transparent hover:border-black border-b-2 cursor-pointer">
                About
              </span>
            </li>
          </Link>
          <Link href="/pages/services">
            <li className="ml-10 uppercase md:text-sm lg:text-lg hidden md:block lg:block">
              <span className="nav-link hover:border-b border-transparent hover:border-black border-b-2 cursor-pointer">
                Services
              </span>
            </li>
          </Link>
          <Link href="/client-area">
            <li className="ml-10 uppercase md:text-sm lg:text-lg hidden md:block lg:block">
              <span className="nav-link hover:border-b border-transparent hover:border-black border-b-2 cursor-pointer">
                Contact Us
              </span>
            </li>
          </Link>
        </div>
        <div className="hidden sm:flex flex-row gap-2">
          <SecondaryButton
            label="English"
            fontSize="text-md md:text-sm lg:text-lg"
            height="py-0 md:py-0 lg:px-0"
            width="px-2 md:px-2 lg:px-4"
            radius="rounded-md"
          />
          <PrimaryButton
            label="Sign in"
            fontSize="text-md md:text-sm lg:text-lg"
            height="py-0 md:py-0 lg:px-0"
            width="px-2 md:px-2 lg:px-4"
            radius="rounded-md"
          />
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={24} />
        </div>
      </div>
      <HamburgerMenu isOpen={menuOpen} />
    </nav>
  );
};

export default Header;
