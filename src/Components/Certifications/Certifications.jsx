import React from "react";
import "./Certifications.css";
import { motion } from "framer-motion";
import { PiCertificateBold } from "react-icons/pi";

const certifications = [
  {
    title: "Foundations of Cybersecurity",
    provider: "Google",
    description:
      "Fundamental training on cybersecurity principles, risk management, and threat mitigation",
  },
  {
    title: "Career Essentials in Cybersecurity",
    provider: "Microsoft and LinkedIn",
    description:
      "Practical skills in information protection and core cybersecurity concepts",
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section" id="certifications">
      <h2 className="certifications-heading">
        <span>Certifications</span>
      </h2>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="cert-content">
              <div className="cert-top-section">
                <div className="cert-icon">
                  <PiCertificateBold />
                </div>
                <div className="cert-top-section-content">
                  <h3>{cert.title}</h3>
                  <p className="provider">{cert.provider}</p>
                </div>
              </div>
              <p className="description">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
