import React from "react";
import './Header.css';
import logo from '../assets/logo.png';
import personicon from '../assets/icon-person.png';
import Ordernow from "./Ordernow";
import Cart from '../assets/icon-cart.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>

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
    </header>
  );
};
export default Header;
