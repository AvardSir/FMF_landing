// SubmitButton.jsx
import React, { useState } from 'react'
import './SubmitButton.css'

const SubmitButton = ({ 
  text = "Купить в 1 клик", 
  successText = "Всё успешно отправлено",
  leftIconSrc = "public/frame1061i676-cigp.svg",
  rightIconSrc = "public/frame1061i676-cigp.svg",
  showLeftIcon = true,
  showRightIcon = true,
  onClick,
  type = "button"
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    
    // Если это submit-кнопка, показываем успех
    if (type === "submit" && !isSuccess) {
      setIsSuccess(true);
      
      // Автоматически сбрасываем через 3 секунды
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  };

  return (
    <button 
      type={type}
      className={`action-button-blue ${isSuccess ? 'action-button-blue--success' : ''}`}
      onClick={handleClick}
    >
      {/* Левая иконка (появляется при hover) */}
      {showLeftIcon && leftIconSrc && !isSuccess && (
        <div className="action-button-blue__left-icon">
          <img
            alt="Left icon"
            src={leftIconSrc}
            className="action-button-blue__icon"
          />
        </div>
      )}

      {/* Иконка успеха */}
      {isSuccess && (
        <div className="action-button-blue__left-icon">
          <span className="action-button-blue__success-icon">✓</span>
        </div>
      )}

      {/* Текст кнопки */}
      <div className="action-button-blue__text-wrapper">
        <span className="action-button-blue__text">
          {isSuccess ? successText : text}
        </span>
      </div>

      {/* Правая иконка (исчезает при hover) */}
      {showRightIcon && rightIconSrc && !isSuccess && (
        <div className="action-button-blue__right-icon">
          <img
            alt="Right icon"
            src={rightIconSrc}
            className="action-button-blue__icon"
          />
        </div>
      )}
    </button>
  )
}

export default SubmitButton