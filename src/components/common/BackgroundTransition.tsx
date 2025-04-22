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
        console.log(`Transitioning to image ${newActiveImage} at ${scrollPercentage}% scroll`);
        setActiveImage(newActiveImage);
      }
    };

    // Initial call to set the correct image
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeImage]);

  return (
    <div className="background-container">
      <div 
        className={`background-image bg-first ${activeImage === 1 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${require('../../assets/backgrounds/first.png')})` }}
      />
      <div 
        className={`background-image bg-second ${activeImage === 2 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${require('../../assets/backgrounds/second.png')})` }}
      />
      <div 
        className={`background-image bg-third ${activeImage === 3 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${require('../../assets/backgrounds/third.png')})` }}
      />
      <div 
        className={`background-image bg-fourth ${activeImage === 4 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${require('../../assets/backgrounds/fourth.png')})` }}
      />
    </div>
  );
};

export default BackgroundTransition; 