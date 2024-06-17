import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import googleimg from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Login Success");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full max-w-md mx-auto mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
          Username/Email 
          <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          placeholder="Enter Your Username/Email"
          onChange={changeHandler}
          name="email"
          className="bg-white rounded-full w-full p-3 text-gray-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>

      <label className="w-full relative mt-4">
        <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
          Password
          <sup className="text-pink-200">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          placeholder="Enter Your Password"
          onChange={changeHandler}
          name="password"
          className="bg-white rounded-full w-full p-3 text-gray-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-10 cursor-pointer">
          {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
        </span>
        <Link to="#" className="text-right block mt-2 text-black">
          Forgot password?
        </Link>
      </label>

      <button className="bg-green-500 py-2 px-4 rounded-full mt-6 font-medium text-white w-1/2 mx-auto">
        Login
      </button>

      <p className="text-center mt-4 text-gray-600">
        New Here? <Link to="/signup" className="text-green-500">Sign Up</Link>
      </p>

      <div className="flex justify-center mt-4 gap-4">
        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300">
          <img src={googleimg} alt="Google" className="w-6 h-6"/>
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6"/>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
