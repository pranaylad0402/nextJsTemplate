import React from "react";
import { SITE_NAME } from "../constants/siteConstants";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";

const Header = () => {
  return (
    <div className="navbar bg-base-100 lg:px-64">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/about"}>About</Link>
            </li>

            <li>
              <Link href={"/contact"}>Contact us</Link>
            </li>
            <li>
              <Link href={"/privacy"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          {SITE_NAME}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/about"}>About</Link>
          </li>

          <li>
            <Link href={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link href={"/privacy"}>Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
