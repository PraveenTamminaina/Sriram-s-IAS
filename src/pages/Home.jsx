import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import About from '../components/About';
import Selections from '../components/Selections';
import OfflineCenters from '../components/OfflineCenters';
import FreeContent from '../components/FreeContent';
import CurrentAffairs from '../components/CurrentAffairs';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Faculty from '../components/Faculty';
import VideoCorner from '../components/VideoCorner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen font-sans bg-[var(--color-bg-light)] overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200">
        <div id="scroll-progress" className="h-full bg-gradient-primary w-0"></div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <Courses />
        <About />
        <Selections />
        <OfflineCenters />
        <FreeContent />
        <CurrentAffairs />
        <WhyChoose />
        <Testimonials />
        <Faculty />
        <VideoCorner />
      </main>
      <Footer />
      
      {/* Floating Help Button */}
      <button className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </button>
    </div>
  );
};

export default Home;
