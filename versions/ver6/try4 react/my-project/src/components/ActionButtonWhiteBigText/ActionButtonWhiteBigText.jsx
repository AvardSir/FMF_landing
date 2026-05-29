import React from 'react'
import './ActionButtonWhiteBigText.css'

const ActionButtonWhiteBigText = ({ 
  text = "Купить в 1 клик", 
  iconSrc = "public/frame1061i676-d6wk.svg",
  onClick 
}) => {
  return (
    <div className="joint3-thq-component3-elm1" onClick={onClick}>
      <div className="joint3-thq-frame1060-elm3"></div>

      {/* Клон картинки слева (изначально скрыт) */}
      <div className="joint3-thq-frame1059-elm3 joint3-thq-left-icon">
        <img
          alt="Frame1061I676"
          src={iconSrc}
          className="joint3-thq-frame1061-elm3"
        />
      </div>

      <div className="joint3-thq-frame5-elm3">
        <span className="joint3-thq-text-elm169">{text}</span>
      </div>

      {/* Оригинальная картинка справа */}
      <div className="joint3-thq-frame1059-elm3 joint3-thq-right-icon">
        <img
          alt="Frame1061I676"
          src={iconSrc}
          className="joint3-thq-frame1061-elm3"
        />
      </div>
    </div>
  )
}

export default ActionButtonWhiteBigText