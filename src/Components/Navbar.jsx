// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="">
      <div className=" w-[600px] bg-gray-500 mx-auto">
        <ul className=" flex justify-evenly items-center py-5">
          <NavLink to={"/"}>
            <li>
              <span className=" font-semibold text-white hover:text-[#FE7F76]">
                Home
              </span>
            </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>
              <span className=" font-semibold text-white hover:text-[#FE7F76]">
                About
              </span>
            </li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>
              <span className=" font-semibold text-white hover:text-[#FE7F76]">
                Contact
              </span>
            </li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>
              <span className=" font-semibold text-white hover:text-[#FE7F76]">
                Blog
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
