// StikyJar.jsx
import React, { useRef, useEffect } from 'react'
import './StikyJar.css'

const StikyJar = ({ 
  imageSrc = "public/image146761-6dy-500h.png",
  altText = "IMAGE146761",
  className = ""
}) => {
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = stickyRef.current;
      if (!stickyElement) return;

      const container = stickyElement.closest('.joint3-thq-frame1079-elm');
      if (!container) return;

      // Получаем позиции элементов
      const containerRect = container.getBoundingClientRect();
      const stickyHeight = stickyElement.offsetHeight;
      
      // Верхняя граница для прилипания
      const stickyTopOffset = 0;
      
      // Нижняя граница контейнера
      const containerBottom = containerRect.bottom;
      
      // Позиция, где элемент должен перестать прилипать
      const stopPosition = containerBottom - stickyHeight;
      
      let topPosition;
      let useFixed = true;
      
      // Логика прилипания
      if (containerRect.top > stickyTopOffset) {
        // Элемент еще не достиг зоны прилипания
        topPosition = containerRect.top;
        useFixed = false;
      } 
      else if (containerRect.top <= stickyTopOffset && stopPosition > stickyTopOffset) {
        // Элемент прилипает к верху
        topPosition = stickyTopOffset;
        useFixed = true;
      }
      else {
        // Элемент достиг нижней границы
        topPosition = stopPosition;
        useFixed = stopPosition > stickyTopOffset;
      }
      
      // Применяем стили без transition для мгновенного отклика
      if (useFixed && topPosition <= stopPosition) {
        stickyElement.style.position = 'fixed';
        stickyElement.style.top = `${topPosition}px`;
        stickyElement.style.left = `${containerRect.left}px`;
        stickyElement.style.width = `${stickyElement.offsetWidth}px`;
        stickyElement.style.bottom = 'auto';
      } else {
        stickyElement.style.position = 'absolute';
        stickyElement.style.top = 'auto';
        stickyElement.style.bottom = '0';
        stickyElement.style.left = '0';
        stickyElement.style.width = '100%';
      }
    };

    // Функция для сброса стилей
    const resetStyles = () => {
      const stickyElement = stickyRef.current;
      if (stickyElement) {
        stickyElement.style.position = '';
        stickyElement.style.top = '';
        stickyElement.style.left = '';
        stickyElement.style.width = '';
        stickyElement.style.bottom = '';
      }
    };

    // Используем requestAnimationFrame для оптимизации
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

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    resetStyles();
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      resetStyles();
    };
  }, []);

  return (
    <div className="joint3-thq-frame1079-elm">
      <div className="joint3-thq-frame1068-elm" ref={stickyRef}>
        <img 
          alt={altText} 
          src={imageSrc} 
          className="joint3-thq-image14-elm2" 
        />
      </div>
    </div>
  )
}

export default StikyJar