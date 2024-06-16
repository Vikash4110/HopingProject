import React from 'react';
import logo from "../assets/logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10 flex flex-wrap justify-between">
      <div className="mb-6 max-w-xs">
        <img src={logo} alt="Hoping Minds" className="w-40 mb-4" />
        <p>
          HopingMinds offers holistic development programs designed to position students in high-growth roles through our network of over 200+ corporate partners. Our tailored approach ensures you're not just prepared, but primed for success in your chosen field.
        </p>
      </div>
      <div className="mb-6">
        <h4 className="mb-4 font-semibold text-xl">GET HELP</h4>
        <ul>
          <li className="mb-2 text-lg"><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li className="mb-2 text-lg"><a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a></li>
          <li className="mb-2 text-lg"><a href="/pay-after-placement" className="hover:underline">Pay After Placement</a></li>
          <li className="mb-2 text-lg"><a href="/career" className="hover:underline">Career</a></li>
          <li className="mb-2 text-lg"><a href="/about" className="hover:underline">About</a></li>
          <li className="mb-2 text-lg"><a href="/cv-builder" className="hover:underline">CV Builder</a></li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="mb-4 font-semibold text-xl">PROGRAMS</h4>
        <ul>
          <li className="mb-2 text-lg"><a href="/management" className="hover:underline">Management</a></li>
          <li className="mb-2 text-lg"><a href="/finance" className="hover:underline">Finance</a></li>
          <li className="mb-2 text-lg"><a href="/full-stack-development" className="hover:underline">Full Stack Development</a></li>
          <li className="mb-2 text-lg"><a href="/ai-ml" className="hover:underline">AI/ML</a></li>
          <li className="mb-2 text-lg"><a href="/networking" className="hover:underline">Networking</a></li>
          <li className="mb-2 text-lg"><a href="/data-science" className="hover:underline">Data Science</a></li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="mb-4 font-semibold text-xl">CONTACT US</h4>
        <p className="text-lg">Tel: +91 91931 00050, +91 76579 22600</p>
        <p className="text-lg">Mail: support@hopingminds.com</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.instagram.com" className="text-xl"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com" className="text-xl"><i className="fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com" className="text-xl"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.youtube.com" className="text-xl"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="w-full text-center mt-6 text-xl">
        <p>&copy; KATINA SKILLS PRIVATE LIMITED 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
