// StikyJar.jsx
import React, { useRef, useEffect } from 'react'
import './StikyJar.css'

const StikyJar = ({ 
  imageSrc = "public/image146761-6dy-500h.png",
  altText = "IMAGE146761",
  className = ""
}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef.current;
      if (!image) return;

      const container = image.closest('.joint3-thq-frame1079-elm');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Вычисляем прогресс скролла внутри контейнера
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - containerRect.top) / (containerRect.height + viewportHeight)
      ));
      
      // Движение сверху вниз (от -100px до +100px относительно исходной позиции)
      const translateY = -50 + (scrollProgress * 200);
      
      image.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызываем сразу для установки начальной позиции
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
                <div className="joint3-thq-frame1079-elm">
              <div className="joint3-thq-frame1068-elm">
                <img alt="IMAGE146761" src="public/image146761-6dy-500h.png" className="joint3-thq-image14-elm2" />
              </div>
            </div>

  )
}

export default StikyJar