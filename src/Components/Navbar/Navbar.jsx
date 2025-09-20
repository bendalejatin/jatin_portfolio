import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import logo from "../Assets/jblogo.png";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // close drawer on mobile
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="Logo" />
          </div>
          <span>Jatin Bendale</span>
        </div>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
                {activeLink === link && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <motion.button
            className="resume-btn"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px #ffffff22" }}
            onClick={() => window.open("/JatinBendale_Resume.pdf", "_blank")}
          >
            📄 Resume
          </motion.button>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween" }}
        >
          <ul>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => handleLinkClick(link)}>
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a href="#resume" onClick={() => setMenuOpen(false)}>📄 Resume</a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
