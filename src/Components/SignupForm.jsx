import React, { useState } from "react";
import { toast } from "react-hot-toast";
import googleimg from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    degree: "",
    college: "",
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
    toast.success("Account Created");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full max-w-md mx-auto mt-6">

      <div className="grid grid-cols-2 gap-4">
        <label className="w-full">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
            Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter Your Name"
            onChange={changeHandler}
            value={formData.name}
            name="name"
            className="bg-white rounded-full w-full p-3  text-gray-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>

        <label className="w-full">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
            Email <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            onChange={changeHandler}
            value={formData.email}
            name="email"
            className="bg-white rounded-full w-full p-3 text-gray-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>

        <label className="w-full">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
            Contact Number <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter phone number"
            onChange={changeHandler}
            value={formData.contactNumber}
            name="contactNumber"
            className="bg-white rounded-full w-full p-3 text-gray-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>

        <label className="w-full">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
            Degree <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter Your Degree"
            onChange={changeHandler}
            value={formData.degree}
            name="degree"
            className="bg-white rounded-full w-full p-3 text-gray-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>

        <label className="w-full">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
            College/University <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter Your College/University"
            onChange={changeHandler}
            value={formData.college}
            name="college"
            className="bg-white rounded-full w-full p-3 text-gray-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter Your Password"
            onChange={changeHandler}
            value={formData.password}
            name="password"
            className="bg-white rounded-full w-full p-3 text-gray-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
      </div>

      <button className="bg-green-500 py-2 px-4 rounded-full mt-6 font-medium text-white w-1/2 mx-auto">
        Sign Up
      </button>

      <p className="text-center mt-4 text-gray-600">
        Already registered? <Link to="/login" className="text-green-500">Login</Link>
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

export default SignupForm;
