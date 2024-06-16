import React from "react";
import logo from "../assets/logo-2.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { isLoggedIn } = props;

  return (
    <div className="flex justify-between items-center w-full py-4 bg-gray-900">
      <Link className="ml-[75px]" to="/">
        <img src={logo} alt="Company Logo" height={32} width={160} loading="lazy" />
      </Link>

      <nav className="ml-auto">
        <ul className="flex gap-x-6 text-white mr-9 text-xl">
          <li>
            <Link className=" hover:text-green-500" to="/">Home</Link>
          </li>
          <li>
            <Link className=" hover:text-green-500" to="/courses">Courses</Link>
          </li>
          <li>
            <Link className=" hover:text-green-500" to="/internship">Internship</Link>
          </li>
          <li>
            <Link className=" hover:text-green-500" to="/hire">Hire From Us</Link>
          </li>
          <li>
            <Link className=" hover:text-green-500" to="/pap">PAP</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4 text-white text-lg">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-green-500 py-[6px] px-[25px] text-xl rounded-[1.00rem]">
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-white text-black py-[6px] px-[25px] text-xl mr-[40px] rounded-[1.00rem] border border-white">
              Sign Up
            </button>
          </Link>
        )}
      
      </div>
    </div>
  );
};

export default Navbar;
