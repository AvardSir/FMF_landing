import React from 'react'
import './ActionButtonWhiteBigText.css'

const ActionButtonWhiteBigText = ({ 
  text = "Купить в 1 клик", 
  leftIconSrc = "/frame1061i676-d6wk.svg",
  rightIconSrc = "/frame1061i676-d6wk.svg",
  showLeftIcon = true,    // опционально: показать левую иконку
  showRightIcon = true,   // опционально: показать правую иконку
  onClick 
}) => {
  return (
    <div className="joint3-thq-component3-elm1" onClick={onClick}>
      <div className="joint3-thq-frame1060-elm3"></div>

      {/* Левая иконка */}
      {showLeftIcon && leftIconSrc && (
        <div className="joint3-thq-frame1059-elm3 joint3-thq-left-icon">
          <img
            alt="Left icon"
            src={leftIconSrc}
            className="joint3-thq-frame1061-elm3"
          />
        </div>
      )}

      <div className="joint3-thq-frame5-elm3">
        <span className="joint3-thq-text-elm169">{text}</span>
      </div>

      {/* Правая иконка */}
      {showRightIcon && rightIconSrc && (
        <div className="joint3-thq-frame1059-elm3 joint3-thq-right-icon">
          <img
            alt="Right icon"
            src={rightIconSrc}
            className="joint3-thq-frame1061-elm3"
          />
        </div>
      )}
    </div>
  )
}

export default ActionButtonWhiteBigText