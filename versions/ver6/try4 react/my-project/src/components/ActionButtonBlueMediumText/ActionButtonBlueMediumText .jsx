import React from 'react'
import './ActionButtonBlueMediumText.css'

const ActionButtonBlueMediumText = ({ 
  text = "ААААКупить в 1 кликАААА", 
  leftIconSrc = "public/frame1061i676-cigp.svg",
  rightIconSrc = "public/frame1061i676-cigp.svg",
  showLeftIcon = true,
  showRightIcon = true,
  onClick 
}) => {
  return (
    <div className="joint3-thq-component2-elm1" onClick={onClick}>
      <div className="joint3-thq-frame1060-elm2"></div>

      {/* Левая иконка (клон, появляется при hover) */}
      {showLeftIcon && leftIconSrc && (

        <div className=" joint3-thq-left-icon">
          <img
            alt="Left icon"
            src={leftIconSrc}
            className="joint3-thq-frame1061-elm2"
          />
        </div>
      )}

      <div className="joint3-thq-frame5-elm2">
        <span className="joint3-thq-text-elm149">{text}</span>
      </div>

      {/* Правая иконка (оригинал, исчезает при hover) */}
      {showRightIcon && rightIconSrc && (
        <div className="joint3-thq-frame1059-elm2 joint3-thq-right-icon">
          <img
            alt="Right icon"
            src={rightIconSrc}
            className="joint3-thq-frame1061-elm2"
          />
        </div>
      )}
    </div>
  )
}

export default ActionButtonBlueMediumText