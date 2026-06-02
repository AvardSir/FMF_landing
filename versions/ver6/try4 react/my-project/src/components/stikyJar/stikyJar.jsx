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
      const stickyRect = stickyElement.getBoundingClientRect();
      const stickyHeight = stickyRect.height;
      
      // Верхняя граница для прилипания (отступ от верха окна)
      const stickyTopOffset = 0; // Прилипает к самому верху
      
      // Нижняя граница контейнера
      const containerBottom = containerRect.bottom;
      
      // Вычисляем позицию, где элемент должен перестать прилипать
      const stopPosition = containerBottom - stickyHeight;
      
      let topPosition;
      
      // Если элемент еще не достиг зоны прилипания
      if (containerRect.top > stickyTopOffset) {
        // Элемент следует за контейнером (обычное поведение)
        topPosition = containerRect.top;
      } 
      // Если элемент в зоне прилипания
      else if (containerRect.top <= stickyTopOffset && stopPosition > stickyTopOffset) {
        // Элемент прилипает к верху
        topPosition = stickyTopOffset;
      }
      // Если элемент достиг нижней границы контейнера
      else {
        // Элемент прижимается к низу контейнера
        topPosition = stopPosition;
      }
      
      // Применяем позицию
      if (topPosition !== undefined) {
        stickyElement.style.position = 'fixed';
        stickyElement.style.top = `${topPosition}px`;
        stickyElement.style.left = `${containerRect.left}px`;
        stickyElement.style.width = `${stickyRect.width}px`;
        
        // Проверяем, не вышел ли элемент за пределы контейнера
        if (topPosition >= stopPosition) {
          stickyElement.style.position = 'absolute';
          stickyElement.style.top = 'auto';
          stickyElement.style.bottom = '0';
          stickyElement.style.left = '0';
        }
      }
    };

    // Функция для сброса стилей при монтировании
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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Пересчет при изменении размера окна
    resetStyles();
    handleScroll(); // Вызываем сразу для установки начальной позиции
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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