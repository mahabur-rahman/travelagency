import React from "react";
import "./navbar.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <header id="navbar">
        {/* navbar left */}
        <div className="container">
          <div className="main_div">
            <a href="#banner" className="logo">
              <img src={logo} alt="Logo" />
            </a>
            {/* navbar right */}
            <div className="nav_list">
              <ul className="flex">
                <li className="list_none">
                  <a href="#destinations">Destinations</a>
                </li>
                <li className="list_none">
                  <a href="#category">Hotels</a>
                </li>
                <li className="list_none">
                  <a href="#destinations">Flights</a>
                </li>
                <li className="list_none">
                  <a href="#booking">Bookings</a>
                </li>
                <li>
                  <a href="#subscribe">Login</a>
                </li>
                <li>
                  <a href="#subscribe" className="sign_btn">
                    Sign Up
                  </a>
                </li>

                <div className="dropdown">
                  <li className="dropbtn">
                    EN <FaAngleDown />
                  </li>
                  <div className="dropdown-content">
                    <a href="/">EN</a>
                    <a href="/">BN</a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
