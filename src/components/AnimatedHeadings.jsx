import React, { useEffect, useState } from 'react';
// import './AnimatedHeadings.css'; // Import the CSS file for styling and animations

const AnimatedHeadings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through headings
    }, 2000); // Change heading every 2 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className='headings-container'>
      <h2 className={`heading ${currentIndex === 0 ? 'visible' : ''}`}>
        enter what ingredient you have
      </h2>
      <h2 className={`heading ${currentIndex === 1 ? 'visible' : ''}`}>
        tell us what you need
      </h2>
      <h2 className={`heading ${currentIndex === 2 ? 'visible' : ''}`}>
        we'll suggest it for you
      </h2>
    </div>
  );
};

export default AnimatedHeadings;
