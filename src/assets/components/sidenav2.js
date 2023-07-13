import React, { useState } from "react";
import Content from "./content";

const SideNav2 = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <div className="flex">
      <nav className="bg-black h-screen w-1/4 sticky top-0">
        <ul className="flex flex-col w-full items-center">
          <li className="mt-4 p-4 mb-4 hover:bg-gray-800 ">
            <a
              href="#"
              className={`text-gray-600 w-full ${
                activeNavItem === "home" ? "text-bold" : "text-white"
              } hover:bg-gray-800 text-white`}
              onClick={() => handleNavItemClick("home")}
            >
              Home
            </a>
          </li>
          <li className="mb-4 hover:bg-gray-800">
            <a
              href="#"
              className={`text-gray-600 ${
                activeNavItem === "analytics" ? "font-bold" : ""
              }`}
              onClick={() => handleNavItemClick("analytics")}
            >
              Analytics
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className={`text-gray-600 ${
                activeNavItem === "reports" ? "font-bold" : ""
              }`}
              onClick={() => handleNavItemClick("reports")}
            >
              Reports
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className={`text-gray-600 ${
                activeNavItem === "settings" ? "font-bold" : ""
              }`}
              onClick={() => handleNavItemClick("settings")}
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex-1">
        {activeNavItem === "home" && (
          <div>
            <h1>HOME</h1>
            <Content />
          </div>
        )}
        {activeNavItem === "analytics" && (
          <div>
            <h1>ANALYTICS</h1>
          </div>
        )}
        {activeNavItem === "reports" && (
          <div>
            <h1>REPORTS</h1>
          </div>
        )}
        {activeNavItem === "settings" && (
          <div>
            <h1>SETTINGS</h1>
          </div>
        )}
      </main>
    </div>
  );
};

export default SideNav2;
