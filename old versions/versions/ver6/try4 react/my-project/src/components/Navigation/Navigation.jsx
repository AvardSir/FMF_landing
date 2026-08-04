import React, { useState, useEffect, useRef, useCallback } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef(null);
  const observerRef = useRef(null);

  const navItems = [
    { id: 'product', label: 'О продукте', sectionId: 'about-product' },
    { id: 'composition', label: 'Состав', sectionId: 'composition' },
    { id: 'forwhom', label: 'Для кого', sectionId: 'for-whom' },
    { id: 'price', label: 'Цена', sectionId: 'price' },
    { id: 'questions', label: 'Вопросы', sectionId: 'faq' }
  ];

  // Плавная прокрутка с учётом высоты хедера
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  // Настройка IntersectionObserver
  useEffect(() => {
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Ищем первую видимую секцию (попавшую в область видимости с учётом отступа)
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const navItem = navItems.find(item => item.sectionId === sectionId);
            if (navItem) {
              setActiveSection(navItem.id);
              break; // берём первую, которая пересекла границу
            }
          }
        }
      },
      {
        // Отступ сверху равен высоте хедера, чтобы триггерить смену, когда секция доходит до верха
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0 // срабатывает при любой видимости
      }
    );

    // Наблюдаем все секции
    const sectionElements = navItems
      .map(item => document.getElementById(item.sectionId))
      .filter(Boolean);

    sectionElements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        sectionElements.forEach(el => observerRef.current.unobserve(el));
        observerRef.current.disconnect();
      }
    };
  }, [navItems]); // теперь зависимость корректна

  // Обработка клика и клавиатуры
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  const handleKeyDown = (e, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="joint3-thq-frame1060-elm4" aria-label="Навигация по странице">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`joint3-thq-frame9-elm2 ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => handleClick(item.sectionId)}
          onKeyDown={(e) => handleKeyDown(e, item.sectionId)}
          aria-current={activeSection === item.id ? 'true' : undefined}
          style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, font: 'inherit' }}
        >
          <span className="joint3-thq-text-elm174">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;