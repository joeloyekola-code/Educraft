import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedStats from '../components/TrustedStats';
import Courses from '../components/Courses';
import LearningPaths from '../components/LearningPaths';
import HowItWorks from '../components/HowItWorks';
import Instructors from '../components/Instructors';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';

const Home = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleSignupOpen = () => setIsSignupOpen(true);
  const handleSignupClose = () => setIsSignupOpen(false);

  return (
    <>
      <Navbar onSignupClick={handleSignupOpen} />
      <Hero />
      <TrustedStats />
      <Courses />
      <LearningPaths />
      <HowItWorks />
      <Instructors />
      <Testimonials />
      <Pricing onSignupClick={handleSignupOpen} />
      <CTA onSignupClick={handleSignupOpen} />
      <Footer />
      <SignupForm isOpen={isSignupOpen} onClose={handleSignupClose} />
    </>
  );
};

export default Home;
