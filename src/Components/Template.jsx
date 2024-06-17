import React, { useState } from "react";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  const [activeButton, setActiveButton] = useState(formType);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col-reverse lg:flex-row w-full max-w-[1160px] py-12 mx-auto justify-between">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt="pattern"
            width={500}
            height={350}
            loading="lazy"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 px-6 lg:px-0 text-white mt-10">
          <div className="bg-[#e2fff1] flex text-xl justify-center rounded-full max-w-md mx-auto mb-4">
            <Link
              to="/login"
              className={`${
                activeButton === "login" ? "bg-[#1DBF73] text-white" : "bg-[#e2fff1] text-black"
              } rounded-full flex-1 py-2 mx-2 text-center`}
              style={{ fontSize: "0.9rem" }}
              onClick={() => handleButtonClick("login")}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className={`${
                activeButton === "signup" ? "bg-[#1DBF73] text-white" : "bg-[#e2fff1] text-black"
              } rounded-full flex-1 py-2 mx-2 text-center`}
              style={{ fontSize: "0.9rem" }}
              onClick={() => handleButtonClick("signup")}
            >
              Register
            </Link>
          </div>

          {activeButton === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Template;
