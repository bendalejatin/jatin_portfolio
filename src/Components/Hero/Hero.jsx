import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <br /> <span className="gradient-text">Jatin Bendale</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I'm a{" "}
          <span className="typewriter-text">
            <Typewriter
              options={{
                strings: ["Full-Stack Developer", "React.js Enthusiast", "Cybersecurity Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Full-stack developer skilled in React.js, Node.js, and modern web technologies.
          I build scalable, secure applications with clean, maintainable code.
          Passionate about cybersecurity and user-centric design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#contact" className="btn-getintouch">
            ✉️ Get In Touch
          </a>
          <a href="/JatinBendale_Resume.pdf" className="btn-downloadcv" download>
            📄 Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <a href="https://github.com/bendalejatin" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
          <a href="www.linkedin.com/in/jatin-bendale-405982257https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="mailto:jatinbendale17@gmail.com"><FiMail /></a>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="scroll-down-icon"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <KeyboardArrowDownRoundedIcon fontSize="large" className="down-icon" />
      </motion.div>
    </section>
  );
};

export default Hero;
