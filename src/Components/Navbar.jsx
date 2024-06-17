import React, { useState } from "react";
import logo from "../assets/logo-2.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { isLoggedIn } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full py-4 bg-gray-900">
      <div className="flex justify-between items-center w-full lg:w-auto px-4 lg:px-0">
        <Link className="mx-auto lg:ml-[75px]" to="/">
          <img src={logo} alt="Company Logo" height={32} width={160} loading="lazy" />
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-x-6 text-white lg:mr-9 text-xl text-center">
          <li>
            <Link className="hover:text-green-500" to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-500" to="/courses" onClick={toggleMenu}>
              Courses
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-500" to="/internship" onClick={toggleMenu}>
              Internship
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-500" to="/hire" onClick={toggleMenu}>
              Hire From Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-500" to="/pap" onClick={toggleMenu}>
              PAP
            </Link>
          </li>
        </ul>

        <div className="flex flex-col lg:flex-row items-center gap-4 text-white text-lg text-center mt-4 lg:mt-0">
          {!isLoggedIn && (
            <Link to="/login" onClick={toggleMenu}>
              <button className="bg-green-500 py-[6px] px-[25px] text-xl rounded-[1.00rem]">
                Log in
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup" onClick={toggleMenu}>
              <button className="bg-white text-black py-[6px] px-[25px] text-xl rounded-[1.00rem] border border-white">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
