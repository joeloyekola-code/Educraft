import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';
import { useState } from 'react';
import './CoursePage.css';

const CoursePage = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Course images mapping (same as home page)
  const courseImages = {
    'UI/UX Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop',
    'React Development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop',
    'Digital Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
    'Product Management': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop'
  };

  const course = courses.find(
    c => c.name.toLowerCase() === decodeURIComponent(courseName).toLowerCase()
  );

  if (!course) {
    return (
      <>
        <Navbar onSignupClick={() => setIsSignupOpen(true)} />
        <div className="course-not-found">
          <div className="container">
            <h1>Course Not Found</h1>
            <p>The course you're looking for doesn't exist.</p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
            >
              Back to Home
            </motion.button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar onSignupClick={() => setIsSignupOpen(true)} />
      
      <div className="course-page">
        {/* Course Hero */}
        <section className="course-hero">
          <div className="container">
            <div className="course-hero-content">
              <motion.div
                className="course-hero-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="course-breadcrumb">
                  <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
                  <span> / </span>
                  <span>{course.category}</span>
                </div>

                <h1 className="course-page-title">{course.title}</h1>
                <p className="course-page-description">{course.description}</p>

                <div className="course-meta-info">
                  <div className="meta-item">
                    <span className="meta-icon">⭐</span>
                    <span>{course.rating} ({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">⏱</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📚</span>
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">🎯</span>
                    <span>{course.projects} projects</span>
                  </div>
                </div>

                <div className="course-instructor-info">
                  <div className="instructor-avatar-large">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="instructor-label">Instructor</div>
                    <div className="instructor-name-large">{course.instructor}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="course-hero-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="course-card-sticky">
                  <div className="course-preview-image">
                    <img 
                      src={courseImages[course.name] || courseImages['UI/UX Design']} 
                      alt={course.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span className="category-badge-large">{course.category}</span>
                  </div>

                  <div className="course-card-content">
                    <div className="course-price-section">
                      <span className="price-large">{course.price}</span>
                      <span className="price-label">one-time payment</span>
                    </div>

                    <motion.button
                      className="btn btn-primary"
                      style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSignupOpen(true)}
                    >
                      Enroll Now
                    </motion.button>

                    <div className="course-includes">
                      <div className="includes-title">This course includes:</div>
                      <ul className="includes-list">
                        <li>✓ {course.lessons} video lessons</li>
                        <li>✓ {course.projects} hands-on projects</li>
                        <li>✓ Lifetime access</li>
                        <li>✓ Certificate of completion</li>
                        <li>✓ Downloadable resources</li>
                        <li>✓ Instructor support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="course-skills">
          <div className="container">
            <h2>What you'll learn</h2>
            <div className="skills-grid">
              {course.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="skill-icon">✓</span>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Content Preview */}
        <section className="course-content">
          <div className="container">
            <h2>Course Curriculum</h2>
            <div className="curriculum-stats">
              <span>{course.lessons} lessons</span>
              <span>•</span>
              <span>{course.duration} total duration</span>
              <span>•</span>
              <span>All levels</span>
            </div>

            <div className="curriculum-preview">
              <p className="preview-note">
                Enroll now to get full access to {course.lessons} structured lessons, 
                {course.projects} real-world projects, and lifetime access to all course materials.
              </p>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSignupOpen(true)}
              >
                Enroll to View Full Curriculum
              </motion.button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <SignupForm isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
};

export default CoursePage;
