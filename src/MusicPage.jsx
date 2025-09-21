import React, { useState, useEffect } from 'react';

// Custom hook for responsive design
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function MusicPage() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
  return (
    <div style={{ 
      paddingTop: 80, 
      color: '#d8f7ffff',
      padding: isMobile ? '80px 1rem 2rem 1rem' : '80px 2rem 2rem 2rem',
      maxWidth: 1300,
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: isMobile ? '2rem' : '2.5rem',
        marginBottom: isMobile ? '1rem' : '1.5rem'
      }}>Music</h1>
      <p style={{
        fontSize: isMobile ? '1rem' : '1.1rem',
        lineHeight: 1.6
      }}>Music page content goes here.</p>
    </div>
  );
}