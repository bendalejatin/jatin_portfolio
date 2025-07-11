import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate EmailJS or an API here
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-heading">
        Get In <span>Touch</span>
      </h2>
      <p className="contact-subtext">
        I'm always interested in new opportunities and exciting projects. Let's
        connect and build something amazing together!
      </p>

      <div className="contact-content">
        <div className="contact-cards">
          <motion.div
            className="contact-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <FiPhone className="contact-icon" />
            <h4>Phone</h4>
            <p>+91 8490850793</p>
          </motion.div>

          <motion.div
            className="contact-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FiMail className="contact-icon" />
            <h4>Email</h4>
            <p>jatinbendale17@gmail.com</p>
          </motion.div>

          <motion.div
            className="contact-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FiMapPin className="contact-icon" />
            <h4>Location</h4>
            <p>Surat, Gujarat</p>
          </motion.div>
        </div>

        <div className="contact-form-container">
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">📧 Send a Message</h3>

              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project or just say hello..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <motion.button
                type="submit"
                className="send-button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                📩 Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Social Icons */}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <a href="https://github.com/bendalejatin" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a
          href="www.linkedin.com/in/jatin-bendale-405982257"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="mailto:jatinbendale17@gmail.com">
          <FiMail />
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
