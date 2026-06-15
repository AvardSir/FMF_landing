// components/Navigation.jsx
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  // Массив с навигационными элементами
  const navItems = [
    { id: 'product', label: 'О продукте', sectionId: 'about-product' },
    { id: 'composition', label: 'Состав', sectionId: 'composition' },
    { id: 'forwhom', label: 'Для кого', sectionId: 'for-whom' },
    { id: 'price', label: 'Цена', sectionId: 'price' },
    { id: 'questions', label: 'Вопросы', sectionId: 'faq' }
  ];

  // Функция плавной прокрутки к секции
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Отслеживание активной секции при скролле
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // +150 для учета хедера
      
      for (const item of navItems) {
        const element = document.getElementById(item.sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && 
              scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="joint3-thq-frame1060-elm4">
      {navItems.map((item) => (
        <div 
          key={item.id}
          className={`joint3-thq-frame9-elm2 ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => scrollToSection(item.sectionId)}
          style={{ cursor: 'pointer' }}
        >
          <span className="joint3-thq-text-elm174">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;