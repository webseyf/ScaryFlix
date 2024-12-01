import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/"><h1>ScaryFlix</h1></a>
        </div>

        {/* Watch Now Button */}
        <button className="watch-now">
          <NavLink to="/movies" className="watch-link">
          <a href="/movies">Watch Now</a>
          </NavLink>
        </button>

        {/* Menu Toggle Icon */}
        <div
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/genres" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Genres
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
