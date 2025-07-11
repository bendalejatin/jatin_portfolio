import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import CountUp from "react-countup";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">
        About <span className="highlight">Me</span>
      </h2>
      <p>
        Passionate about creating innovative solutions and pushing the boundaries of technology
      </p>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-header">
          <FaUser className="about-icon" />
          <h3>Professional Summary</h3>
        </div>

        <p className="about-text">
          I am a full-stack developer skilled in React.js, Node.js, and modern web technologies.
          I build scalable, secure applications with clean, maintainable code. Passionate about
          cybersecurity and user-centric design, I thrive in collaborative environments and enjoy
          tackling complex challenges. Excited to contribute to innovative projects and expand my
          technical expertise.
        </p>

        <div className="about-stats">
          <div className="stat">
            <h4>
              <CountUp end={2} duration={2} enableScrollSpy scrollSpyDelay={100} />+
            </h4>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h4>
              <CountUp end={10} duration={2} enableScrollSpy scrollSpyDelay={100} />+
            </h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h4>
              <CountUp end={9.55} duration={2} decimals={2} enableScrollSpy scrollSpyDelay={100} />
            </h4>
            <p>CGPA</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
