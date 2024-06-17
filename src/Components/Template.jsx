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
      <div className="flex-grow flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
        <div className="relative w-11/12 max-w-[450px]">
          <img
            src={image}
            alt="pattern"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4 right-4"
          />
        </div>
        <div className="w-11/12 max-w-[450px] mx-0 text-white">
        <div className="bg-[#e2fff1] flex text-xl justify-center rounded-full max-w-md mx-auto mb-4">
            <Link
              to="/login"
              className={`${
                activeButton === "login" ? "bg-[#1DBF73] text-white" : "bg-[#e2fff1] text-black"
              } rounded-full flex-1 py-2 mx-2  text-center`}
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

          {formType === "signup" ? (
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
