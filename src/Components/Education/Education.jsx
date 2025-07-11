import React from "react";
import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institute: "Uka Tarsadia University",
    description: "Asha M. Tarsadia Institute of Computer Science and Technology (CGPA: 9.58 till 6th Sem)",
    date: "Expected 2026",
  },
  {
    title: "Higher Secondary Certificate",
    field: "Science",
    institute: "Kendriya Vidyalaya No.1, Ichhanath, Surat",
    description: "Percentage: 78.8%",
    date: "2020 - 2022",
  },
  {
    title: "Secondary School Certificate",
    field: "General",
    institute: "Kendriya Vidyalaya No.1, Ichhanath, Surat",
    description: "Percentage: 87.6%",
    date: "2010 - 2020",
  },
];
const Education = () => {
  return (
    <div className="education-section" id="education">
      <h2 className="education-heading">
        <span>Education</span>
      </h2>

      {educationData.map((item, index) => (
        <motion.div
          className="education-card"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="icon-wrapper">
            <FaGraduationCap className="edu-icon" />
          </div>
          <div className="education-content">
            <div className="card-header">
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
            </div>
            <div className="subtitle-line">
              <p>{item.field}</p>
              <div className="university-line">
                <FaUniversity className="university-icon" />
                <span>{item.institute}</span>
              </div>
            </div>
            <p className="description">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
