import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './CTA.css';

const CTA = ({ onSignupClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">Ready to start learning?</h2>
          <p className="cta-subtitle">
            Join thousands of learners building real skills
          </p>
          
          <div className="cta-buttons">
            <motion.button
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSignupClick}
            >
              Get Started
            </motion.button>
            <motion.button
              className="btn btn-secondary btn-large"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.querySelector('#courses');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse Courses
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
