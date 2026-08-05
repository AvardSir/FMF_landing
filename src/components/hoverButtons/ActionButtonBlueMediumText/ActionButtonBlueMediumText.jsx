import React from 'react'
import './ActionButtonBlueMediumText.css'

const ActionButtonBlueMediumText = ({ 
  text = "Купить в 1 клик", 
  leftIconSrc = "/frame1061i676-cigp.svg",
  rightIconSrc = "/frame1061i676-cigp.svg",
  showLeftIcon = true,
  showRightIcon = true,
  onClick 
}) => {
  return (
    <div className="action-button-blue" onClick={onClick}>
      {/* Левая иконка (появляется при hover) */}
      {showLeftIcon && leftIconSrc && (
        <div className="action-button-blue__left-icon">
          <img
            alt="Left icon"
            src={leftIconSrc}
            className="action-button-blue__icon"
          />
        </div>
      )}

      {/* Текст кнопки */}
      <div className="action-button-blue__text-wrapper">
        <span className="action-button-blue__text">{text}</span>
      </div>

      {/* Правая иконка (исчезает при hover) */}
      {showRightIcon && rightIconSrc && (
        <div className="action-button-blue__right-icon">
          <img
            alt="Right icon"
            src={rightIconSrc}
            className="action-button-blue__icon"
          />
        </div>
      )}
    </div>
  )
}

export default ActionButtonBlueMediumText