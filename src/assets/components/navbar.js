import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-black py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
