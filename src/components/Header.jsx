import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../asset/media/svg/Logo.svg";

export default function Header(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // fixed typo

  // Toggle dropdown manually
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div id="header" className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand py-0 logo" to="/">
            <img src={logo} className="default-logo" alt="Logo" />
          </Link>

          {/* Toggle for mobile */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div
            className="collapse navbar-collapse mt-3 mt-lg-0 justify-content-around"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-center">
              <li
                className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/" ? "active" : ""}`}
              >
                <Link className="nav-link" to="/">
                  {props.headerone}
                </Link>
              </li>
              <li
                className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/about" ? "active" : ""}`}
              >
                <Link className="nav-link" to="/about">
                  {props.headertwo}
                </Link>
              </li>
              <li
                className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/contact" ? "active" : ""}`}
              >
                <Link className="nav-link" to="/contact">
                  {props.headerthree}
                </Link>
              </li>
              <li
                className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/tearm" ? "active" : ""}`}
              >
                <Link className="nav-link" to="/tearm">
                  {props.headerfour}
                </Link>
              </li>
              <li
                className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/privacy" ? "active" : ""}`}
              >
                <Link className="nav-link" to="/privacy">
                  {props.headerfive}
                </Link>
              </li>
              <li
                className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/blog" ? "active" : ""}`}
              >
                <Link className="nav-link" to="/blog">
                  {props.headersix}
                </Link>
              </li>

              {/* Dropdown */}
              <li
                className="nav-item mb-2 mb-lg-0 dropdown"
                onMouseLeave={() => setIsDropdownOpen(false)} // close dropdown on hover leave
              >
                <button
                  className="nav-link d-flex align-items-center bg-transparent border-0"
                  onClick={toggleDropdown}>
                  List
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </button>

                {/* {isDropdownOpen && (
                  <ul className="dropdown-list">
                    <li className={location.pathname === "/requirements" ? "active" : ""}>
                      <Link to="/requirements" onClick={() => setIsDropdownOpen(false)}>Requirements</Link>
                    </li>
                    <li className={location.pathname === "/business_listing" ? "active" : ""}>
                      <Link to="/business_listing" onClick={() => setIsDropdownOpen(false)}>Business Listing</Link>
                    </li>
                  </ul>
                )} */}
                {isDropdownOpen && (
                  <ul className="dropdown-list" style={{ display: "block" }}>
                    <li
                      className={
                        location.pathname === "/requirements" ? "active" : ""
                      }
                    >
                      <Link
                        to="/requirements"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Requirements
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/business_listing" ? "active" : ""
                      }
                    >
                      <Link
                        to="/business_listing"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Business Listing
                      </Link>
                    </li>
                     <li
                      className={
                        location.pathname === "/business_Data" ? "active" : ""
                      }
                    >
                      <Link
                        to="/business_Data"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Business Data
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Login/Signup Buttons */}
            <div>
              <button className="nav-item mb-2 mb-lg-0 btn-login">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </button>
              <button className="nav-item mb-2 mb-lg-0 btn-signup">
                <Link className="nav-link" to="/">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
