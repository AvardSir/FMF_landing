import React from 'react'

const ActionButtonWhiteBigText = ({ 
  text = "Купить в 1 клик", 
  iconSrc = "public/frame1061i676-cigp.svg",
  onClick 
}) => {
  return (
    <div className="joint3-thq-frame1075-elm">
      <div className="joint3-thq-component2-elm1">
        <div className="joint3-thq-frame1060-elm2">
          <div className="joint3-thq-tablerbasket-elm2">
            <div className="joint3-thq-group-elm2"></div>
          </div>
        </div>
        <div className="joint3-thq-frame5-elm2">
          <span className="joint3-thq-text-elm149">{text}</span>
        </div>
        <div className="joint3-thq-frame1059-elm2">
          <img 
            alt="Frame1061I676" 
            src={iconSrc} 
            className="joint3-thq-frame1061-elm2" 
          />
        </div>
      </div>
    </div>
  )
}

export default ActionButtonWhiteBigText