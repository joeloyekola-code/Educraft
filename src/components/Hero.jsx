import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState('');
  const navigate = useNavigate();

  const categories = [
    { name: 'Designer', icon: '🎨' },
    { name: 'Development', icon: '💻' },
    { name: 'Business', icon: '📊' },
    { name: 'Marketing', icon: '📈' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchError('');
    
    if (!searchQuery.trim()) {
      setSearchError('Please enter a course name');
      return;
    }

    const foundCourse = courses.find(
      course => course.name.toLowerCase() === searchQuery.toLowerCase().trim() ||
                course.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    if (foundCourse) {
      navigate(`/course/${encodeURIComponent(foundCourse.name)}`);
    } else {
      setSearchError('Course not found. Try "UI/UX Design", "React Development", "Digital Marketing", or "Product Management"');
    }
  };

  const handleCategoryClick = (category) => {
    const element = document.querySelector('#courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            Introducing Educraft
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Learn skills that<br />actually pay.
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Industry-led courses designed to help you build<br className="desktop-break" />
            real-world skills and land better opportunities.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.querySelector('#courses');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Learning
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
          </motion.div>

          <motion.div className="hero-categories" variants={itemVariants}>
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                className="category-tag"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryClick(category.name)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.form className="hero-search" variants={itemVariants} onSubmit={handleSearch}>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for a skill"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchError('');
                }}
                className="search-input"
              />
              <motion.button
                type="submit"
                className="btn btn-primary search-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🔍 Search
              </motion.button>
            </div>
            {searchError && (
              <motion.p
                className="search-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {searchError}
              </motion.p>
            )}
          </motion.form>

          <motion.div className="hero-video" variants={itemVariants}>
            <div className="video-container">
              <div className="video-placeholder">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/bI6q16ffdgQ?si=uELiNZLTv0_O3rsH"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                />
              </div>
              <motion.div
                className="watch-label"
                whileHover={{ scale: 1.05 }}
              >
                ▶ Watch how it works
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
