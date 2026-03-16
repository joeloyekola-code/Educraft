import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { instructors } from '../data/courses';
import './Instructors.css';

const Instructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="instructors" className="instructors-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Learn from industry experts</h2>
          <p>Real professionals teaching real skills</p>
        </motion.div>

        <div className="instructors-grid">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              className="instructor-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="instructor-photo">
                <div className="photo-placeholder">
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="instructor-info">
                <h3 className="instructor-name">{instructor.name}</h3>
                <p className="instructor-expertise">{instructor.expertise}</p>
                <p className="instructor-bio">{instructor.bio}</p>
                
                <div className="instructor-stats">
                  <span className="stat">📚 {instructor.courses} courses</span>
                  <span className="stat">👥 {instructor.students.toLocaleString()} students</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
