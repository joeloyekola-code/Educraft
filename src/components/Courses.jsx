import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import './Courses.css';
<p
  style={{
    padding: "8px 16px",  // top/bottom 8px, left/right 16px
    margin: 0,             // remove default margin
    lineHeight: 1.5        // improves readability
  }}
>
  Your course description here
</p>

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const featuredCourses = courses.slice(0, 4);

  const handleEnroll = (course) => {
    navigate(`/course/${encodeURIComponent(course.name)}`);
  };

  return (
    <section id="courses" className="courses-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Courses</h2>
          <p>Start learning with our most popular courses</p>
        </motion.div>

        <div className="courses-grid">
          {featuredCourses.map((course, index) => {
            // Map course images
            const courseImages = {
              'UI/UX Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop',
              'React Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop',
              'Digital Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
              'Product Management': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop'
            };

            return (
              <motion.div
                key={course.id}
                className="course-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => handleEnroll(course)}
                style={{ cursor: 'pointer' }}
              >
                <div className="course-image">
                  <img 
                    src={courseImages[course.name] || courseImages['UI/UX Design']} 
                    alt={course.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="course-category-badge">{course.category}</span>
                </div>

                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                
                <div className="course-meta">
                  <div className="instructor">
                    <span className="instructor-avatar">👤</span>
                    <span className="instructor-name">{course.instructor}</span>
                  </div>
                  
                  <div className="course-info">
                    <span className="info-item">⏱ {course.duration}</span>
                    <span className="info-item">
                      ⭐ {course.rating} ({course.students.toLocaleString()})
                    </span>
                  </div>
                </div>

                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEnroll(course);
                    }}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        <motion.div
          className="view-all"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="btn btn-outline"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
