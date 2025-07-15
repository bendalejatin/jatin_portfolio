import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';

const skillsData = [
  { category: "Technical Skills", skills: "C, Python, Java" },
  { category: "Frontend", skills: "HTML, CSS, Javascript, React" },
  { category: "Backend", skills: "Node.js, PHP" },
  { category: "Database", skills: "SQL, MongoDb" },
  { category: "Technologies", skills: "Android, Flutter" },
  { category: "Cybersecurity", skills: "Fundamentals, Risk Assessment and Best Practices" },
  { category: "Soft Skills", skills: "Communication, Team work, Time Management, Attention to Detail" },
];

const SkillsSection = () => {
  return (
    <motion.section
      className="skills-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="skills-heading">SKILLS</h2>
      <div className="skills-table">
        {skillsData.map((item, i) => (
          <div className="skills-row" key={i}>
            <div className="skills-category">{item.category}</div>
            <div className="skills-list">{item.skills}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
