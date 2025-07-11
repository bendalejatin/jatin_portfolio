import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { FaLaptopCode, FaPills, FaLanguage, FaDumbbell, FaLink } from "react-icons/fa";

const projects = [
  {
    title: "Online Learning Platform",
    type: "Web Development",
    description:
      "Created an interactive and responsive platform using HTML, CSS, JavaScript, and Bootstrap, enabling users to browse and engage with a variety of educational courses in a seamless manner.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: {
      code: "#",
      demo: "#"
    }
  },
  {
    title: "Pharmacy Store Management",
    type: "Student Application",
    description:
      "Developed a web application using PHP and SQL for Satyam Medical Store to manage inventory, sales, and customer records efficiently, automating key store operations.",
    tech: ["PHP", "SQL", "Web Development"],
    links: {
      code: "#",
      demo: "#"
    }
  },
  {
    title: "Language Translator App",
    type: "Mobile Development",
    description:
      "Created an Android app that translates spoken language in real-time, integrating Google's voice recognition and translation APIs for a seamless experience. Enhanced accessibility and communication across languages.",
    tech: ["Android", "Google APIs", "Voice Recognition"],
    links: {
      code: "#",
      demo: "#"
    }
  },
  {
    title: "Gym Fitness App",
    type: "Mobile Development",
    description:
      "Developed a Flutter app focused on gym fitness, featuring workout tracking, exercise guidance, and progress monitoring. Delivered a smooth, cross-platform experience to help users stay motivated and achieve their fitness goals effectively.",
    tech: ["Flutter", "Mobile Development", "Cross-platform"],
    links: {
      code: "#",
      demo: "#"
    }
  }
];

const iconMap = {
  "Online Learning Platform": <FaLaptopCode size={32} color="#fff" />,
  "Pharmacy Store Management": <FaPills size={32} color="#fff" />,
  "Language Translator App": <FaLanguage size={32} color="#fff" />,
  "Gym Fitness App": <FaDumbbell size={32} color="#fff" />
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        Featured <span className="highlight">Projects</span>
      </h2>
      <p className="section-subtitle">
        A showcase of innovative solutions and applications I've built
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-top-section">
                <div className="project-top-section-image">
                    {iconMap[project.title]}
                </div>
                <div className="project-top-section-content">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-type">{project.type}</div>
            </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.links.code} className="btn-code">💻 View Code</a>
              <a href={project.links.demo} className="btn-demo">🔗 Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="view-more">
        <p >Want to see more of my work?</p>
        <a href="#" className="view-all-btn">
  <FaLink />
  View All Projects on GitHub
</a>
      </div>
    </section>
  );
};

export default Projects;
