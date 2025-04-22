import React, { useEffect, useState } from 'react';

const BackgroundTransition: React.FC = () => {
  const [activeImage, setActiveImage] = useState(1);
  const totalImages = 4;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      // Calculate which image should be active based on scroll percentage
      const newActiveImage = Math.min(
        Math.max(1, Math.ceil((scrollPercentage / 100) * totalImages)),
        totalImages
      );

      if (newActiveImage !== activeImage) {
        setActiveImage(newActiveImage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeImage]);

  return (
    <div className="background-container">
      <div className={`background-image bg-first ${activeImage === 1 ? 'active' : ''}`} />
      <div className={`background-image bg-second ${activeImage === 2 ? 'active' : ''}`} />
      <div className={`background-image bg-third ${activeImage === 3 ? 'active' : ''}`} />
      <div className={`background-image bg-fourth ${activeImage === 4 ? 'active' : ''}`} />
    </div>
  );
};

export default BackgroundTransition; 