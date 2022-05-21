import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!nav);
  };
  return (
    <nav className="flex justify-between h-20 items-center px-4 text-white absolute w-full z-10">
      <div className="flex">
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          BEACHES.
        </h1>
      </div>
      <ul className="md:flex hidden">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson className="" size={20} />
      </div>
      {/* humbergure menu */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      {/* dropdown menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "flex flex-col absolute top-0 left-0 bg-gray-100 w-full px-4 py-6 text-black "
            : "absolute left-[-100%]"
        }
      >
        <h1>BEACHES.</h1>
        <ul className="">
          <li className="border-b border-gray-300">Home</li>
          <li className="border-b border-gray-300">Destination</li>
          <li className="border-b border-gray-300">Travel</li>
          <li className="border-b border-gray-300">View</li>
          <li className="border-b border-gray-300">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button className="">Account</button>
        </div>
        <div className="flex justify-evenly my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </nav>
  );
};
