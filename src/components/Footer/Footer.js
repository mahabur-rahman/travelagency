import React from "react";
// footer scss
import "./footer.scss";
// image
import footerLogo from "../../images/footerLogo.svg";
import playStore from "../../images/play-store.png";
import appleStore from "../../images/apple-store.png";
// react router dom
import { Link } from "react-router-dom";
// react icon
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="col-3 col-md-6">
            <div className="footer_logo">
              <img src={footerLogo} alt="Footer Logo" />
              <p>Book your trip in minute, get full Control for much longer.</p>
            </div>
          </div>
          <div className="col-2">
            <div className="first_list">
              <h3>Company</h3>
              {/* list */}
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Mobile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="second_list">
              <h3>Contact</h3>
              {/* list */}
              <ul>
                <li>
                  <Link to="/">Help/FAQ</Link>
                </li>
                <li>
                  <Link to="/">Press</Link>
                </li>
                <li>
                  <Link to="/">Affiliate</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="third_list">
              <h3>More</h3>
              {/* list */}
              <ul>
                <li>
                  <Link to="/">Airlinefees</Link>
                </li>
                <li>
                  <Link to="/">Airline</Link>
                </li>
                <li>
                  <Link to="/">Low fare tips</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="social_icon">
              <ul className="flex">
                <li className="facebook">
                  <Link to="/">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="instagram">
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </li>
                <li className="twitter">
                  <Link to="/">
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="title">
              <h3>Discover our app</h3>
            </div>
            <div className="payment">
              <div className="google_play">
                <a href="/">
                  <img src={playStore} alt="Play Store" />
                </a>
              </div>
              <div className="apple_store">
                <a href="/">
                  <img src={appleStore} alt="Apple Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="copyright text-center">
          <p>All rights reserved@jadoo.co </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
