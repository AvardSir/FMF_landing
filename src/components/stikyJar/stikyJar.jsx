// StikyJar.jsx
import React, { useRef, useEffect } from 'react';
import './stikyJar.css';

const StikyJar = ({ 
  imageSrc = "public/image146761-6dy-500h.png",
  altText = "IMAGE146761",
  className = ""
}) => {
  const stickyRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = stickyRef.current;
      const container = containerRef.current;
      
      if (!stickyElement || !container) return;

      // Get positions
      const containerRect = container.getBoundingClientRect();
      const stickyHeight = stickyElement.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate thresholds
      const startStickPoint = 0; // Stick to top of viewport
      const stopStickPoint = containerRect.bottom - stickyHeight;
      
      if (containerRect.top <= startStickPoint && stopStickPoint > startStickPoint) {
        // Sticky mode - element should stick to top
        stickyElement.style.position = 'fixed';
        stickyElement.style.top = `${startStickPoint}px`;
        stickyElement.style.left = `${containerRect.left}px`;
        stickyElement.style.width = `${containerRect.width}px`;
        stickyElement.style.bottom = 'auto';
      } 
      else if (containerRect.bottom <= stickyHeight) {
        // Bottom mode - element reached bottom of container
        stickyElement.style.position = 'absolute';
        stickyElement.style.top = 'auto';
        stickyElement.style.bottom = '0';
        stickyElement.style.left = '0';
        stickyElement.style.right = '0';
      }
      else {
        // Normal mode - element scrolls naturally
        stickyElement.style.position = 'absolute';
        stickyElement.style.top = 'auto';
        stickyElement.style.bottom = 'auto';
        stickyElement.style.left = '0';
        stickyElement.style.right = '0';
      }
    };

    // Optimized scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call and event listeners
    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="joint3-thq-frame1079-elm" ref={containerRef}>
      <div className="joint3-thq-frame1068-elm" ref={stickyRef}>
        <img 
          alt={altText} 
          src={imageSrc} 
          className="joint3-thq-image14-elm2" 
        />
      </div>
    </div>
  );
};

export default StikyJar;