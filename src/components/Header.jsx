import React, { useRef } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import personicon from "../assets/icon-person.png";
import Ordernow from "./Ordernow";
import Cart from "../assets/icon-cart.png";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const navRef = useRef();

  // Toggle sidebar open/close
  const toggleNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("show-nav");
    }
  };

  return (
    <header>
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>

      <nav ref={navRef} className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menus</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <ul className="icon-links">
          <li><img src={personicon} alt="User" /></li>
          <li><img src={Cart} alt="Cart" /></li>
          <li><Ordernow title="Order Now" /></li>
        </ul>

        {/* Close button inside sidebar */}
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <IoClose />
        </button>
      </nav>

      {/* Menu open button */}
      <button className="nav-btn nav-open-btn" onClick={toggleNavbar}>
        <CiMenuFries />
      </button>
    </header>
  );
};

export default Header;
