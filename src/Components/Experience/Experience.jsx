import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRegClock, FaBriefcase } from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Dec Gaming Studio Pvt Ltd",
    location: "Vadodra, Gujarat",
    period: "Aug 2024 - May 2025",
    current: true,
    points: [
      "Led two live ReactJS-based projects, overseeing end-to-end development",
      "Spearheaded MERN stack application design and deployment with MUI library",
      "Demonstrated leadership in ReactJS and full-stack project management",
      "Collaborated with cross-functional teams to optimize performance",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "MUI"],
  },
  {
    title: "React Developer",
    company: "Krtya Technologies Pvt Ltd",
    location: "Surat, Gujarat",
    period: "Jan 2024 - July 2024",
    current: false,
    points: [
      "Designed responsive frontend for shoe e-commerce website using ReactJS",
      "Collaborated with UI/UX teams for engaging product pages",
      "Integrated backend data for real-time inventory display",
      "Enhanced user interactions and shopping experience",
    ],
    tech: ["React.js", "JavaScript", "CSS", "REST APIs"],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">
        Work <span className="highlight">Experience</span>
      </h2>
      <div className="timeline">
        <motion.div
          className="timeline-line"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1 }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot">
              <FaBriefcase className="dot-icon" />
            </div>

            <div
              className={`timeline-content ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            >
              {exp.current && <span className="current-badge">Current</span>}
              <h3>{exp.title}</h3>
              <p className="company">
                <span className="company-name">{exp.company}</span>
              </p>
              <p className="location">
                <FaMapMarkerAlt /> {exp.location}
              </p>
              <p className="period">
                <FaRegClock /> {exp.period}
              </p>

              {expandedIndex === index && (
                <>
                  <ul className="points">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>

                  <div className="tech-tags">
                    {exp.tech.map((tag, i) => (
                      <span className="tag" key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
