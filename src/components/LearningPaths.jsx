import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { learningPaths } from '../data/courses';
import './LearningPaths.css';

const LearningPaths = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="learning-paths" className="learning-paths-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Learning Paths</h2>
          <p>Structured journeys to help you master your craft</p>
        </motion.div>

        <div className="paths-grid">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              className="path-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="path-icon">{path.icon}</div>
              <h3 className="path-title">{path.title}</h3>
              <p className="path-description">{path.description}</p>
              
              <div className="path-meta">
                <span className="path-info">📚 {path.courses} courses</span>
                <span className="path-info">⏱ {path.duration}</span>
              </div>

              <motion.button
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '1rem' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Path
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
