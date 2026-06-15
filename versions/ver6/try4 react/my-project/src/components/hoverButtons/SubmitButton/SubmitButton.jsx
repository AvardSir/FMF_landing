import React, { useState, useEffect } from 'react'
import './SubmitButton.css'

const SubmitButton = ({ 
  text = "Купить в 1 клик", 
  successText = "Всё успешно отправлено",
  leftIconSrc = "public/frame1061i676-cigp.svg",
  rightIconSrc = "public/frame1061i676-cigp.svg",
  showLeftIcon = true,
  showRightIcon = true,
  onClick,
  type = "button",
  disabled = false,
  isValid = false,
  isSubmitSuccess = false,
  onSuccessReset
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSubmitSuccess) {
      setIsSuccess(true);
      // Автоматически сбрасываем через 3 секунды
      setTimeout(() => {
        setIsSuccess(false);
        if (onSuccessReset) onSuccessReset();
      }, 3000);
    }
  }, [isSubmitSuccess, onSuccessReset]);

  const handleClick = (e) => {
    if (disabled) return;
    if (onClick) {
      onClick(e);
    }
  };

  // Кнопка активна только если форма валидна
  const isButtonDisabled = disabled || (type === "submit" && !isValid && !isSuccess);

  return (
    <button 
      type={type}
      className={`action-button-blue ${isSuccess ? 'action-button-blue--success' : ''} ${isButtonDisabled ? 'action-button-blue--disabled' : ''}`}
      onClick={handleClick}
      disabled={isButtonDisabled}
    >
      {showLeftIcon && leftIconSrc && !isSuccess && (
        <div className="action-button-blue__left-icon">
          <img
            alt="Left icon"
            src={leftIconSrc}
            className="action-button-blue__icon"
          />
        </div>
      )}

      {isSuccess && (
        <div className="action-button-blue__left-icon">
          <span className="action-button-blue__success-icon">✓</span>
        </div>
      )}

      <div className="action-button-blue__text-wrapper">
        <span className="action-button-blue__text">
          {isSuccess ? successText : text}
        </span>
      </div>

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