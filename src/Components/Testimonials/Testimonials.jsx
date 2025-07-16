import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    text: "Working with Jatin was a game-changer for our startup. He built a robust full-stack application using the MERN stack that perfectly aligned with our business needs. His problem-solving skills and dedication are remarkable.",
    name: "Rahul Patel",
    rating: 5
  },
  {
    text: "Jatin’s expertise in React helped us revamp our entire frontend. He was responsive, professional, and always one step ahead.",
    name: "Ayesha Khan",
    rating: 5
  },
  {
    text: "His attention to detail and clean code made integration seamless. Highly recommend working with him!",
    name: "Dev Mehra",
    rating: 5
  }
];

const DURATION = 8000; // 8 seconds for full progress

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        setIndex(prev => (prev + 1) % testimonials.length);
      }
    };

    const interval = setInterval(tick, 100);

    return () => clearInterval(interval);
  }, [index]);

  const handleNav = (dir) => {
    setIndex((prev) => {
      const newIndex = dir === 'next' ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length;
      return newIndex;
    });
    setProgress(0);
  };

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">
        Client <span className="gradient-text-testimonial">Testimonials</span>
      </h2>
      <p className="testimonial-subtitle">What clients and collaborators say about working with me</p>

      <div className="testimonial-card">
        <button className="nav-btn left" onClick={() => handleNav('prev')}>&lt;</button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="testimonial-content"
          >
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">"{testimonials[index].text}"</p>
            <div className="stars">
              {'★'.repeat(testimonials[index].rating)}
            </div>
            <h3 className="client-name">{testimonials[index].name}</h3>
          </motion.div>
        </AnimatePresence>

        <button className="nav-btn right" onClick={() => handleNav('next')}>&gt;</button>
      </div>

      <div className="dots">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => {
              setIndex(i);
              setProgress(0);
            }}
          />
        ))}
      </div>

      <div className="progress-bar-wrapper">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
