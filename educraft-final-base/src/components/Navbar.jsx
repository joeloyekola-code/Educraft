import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = ({ onSignupClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Learning Paths', href: '#learning-paths' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Community', href: '#testimonials' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <Logo className="logo-icon" />
          <span className="logo-text">Educraft</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-links desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions desktop-nav">
          <motion.a
            href="#"
            className="nav-login"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Log in
          </motion.a>
          <motion.button
            className="btn btn-primary"
            onClick={onSignupClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hamburger mobile-nav"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <a href="#" className="mobile-login">Log in</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
              >
                <button className="btn btn-primary btn-mobile" onClick={() => {
                  setIsOpen(false);
                  onSignupClick();
                }}>
                  Get Started
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
