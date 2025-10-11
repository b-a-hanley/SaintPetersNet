import { useState } from "react";
import LogoBrown from "../../assets/Logo-brown.png";
import LogoBrownAlt from "../../assets/Logo-brown-alt.png";
import {churchName} from "../automation/Config";
import { PrimaryButton } from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="relative w-12 h-12">
            <img
              src={LogoBrown}
              alt="Logo"
              className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={LogoBrownAlt}
              alt="Logo Alt"
              className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <span className="self-center text-2xl font-semibold">{churchName}</span>
        </a>
        
        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden bg-action group"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 stroke-white group-hover:stroke-black hover:stroke-black transition-colors duration-200"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>

        {/* Menu */}
        <div className={`${isOpen ? "" : "hidden"} w-full md:flex md:w-auto`} id="mobile-menu">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li><a href="our-story" className="block px-4 py-2 hover:text-primary">Our Story</a></li>
            <li><a href="ben-hanley" className="block px-4 py-2 hover:text-primary">Our Team</a></li>
            <li><a href="pricing" className="block px-4 py-2 hover:text-primary">Pricing</a></li>
            <li>
              <PrimaryButton link="contact-us">Contact us</PrimaryButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
