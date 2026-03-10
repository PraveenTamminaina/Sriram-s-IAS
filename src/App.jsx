import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const scrolled = document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const width = (scrolled / maxScroll) * 100;
        scrollProgress.style.width = `${width}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Home />;
}

export default App;
