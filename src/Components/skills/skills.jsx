import React from "react";
import { motion } from "framer-motion";
import {
  SiC, SiPython, SiHtml5, SiCss3, SiJavascript, SiReact,
  SiNodedotjs, SiPhp, SiMysql, SiMongodb,
  SiAndroid, SiFlutter, SiGooglecloud, SiHackthebox,
  SiSlack, SiNotion, SiSemanticuireact
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import "./Skills.css";

const skillCategories = [
  {
    category: "Technical Skills",
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "PHP", icon: <SiPhp /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "SQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Technologies",
    skills: [
      { name: "Android", icon: <SiAndroid /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ],
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Fundamentals", icon: <SiGooglecloud /> },
      { name: "Risk Assessment", icon: <SiHackthebox /> },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", icon: <SiSlack /> },
      { name: "Teamwork", icon: <SiNotion /> },
      { name: "Time Management", icon: <MdAccessTime /> },
      { name: "Attention to Detail", icon: <SiSemanticuireact /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="skills-gradient-text">My Skills</span>
      </motion.h2>

      <div className="skills-grid-container">
        {skillCategories.map((category) => (
          <div className="flip-card" key={category.category}>
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front skill-category-card">
                <h3 className="skill-category-title">{category.category}</h3>
              </div>

              {/* Back */}
              <div className="flip-card-back skill-category-card">
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li className="skill-item" key={skill.name}>
                      <span className="skill-icon">{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
