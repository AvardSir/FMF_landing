import React from 'react'

const ActionButtonWhiteSmallText = ({ text = "Оставить заявку", iconSrc = "public/frame1061i734-1gkq.svg" }) => {
  return (
    <div className="joint3-thq-component5-elm">
      <div className="joint3-thq-frame1060-elm5"></div>

      {/* Клон картинки слева (изначально скрыт) */}
      <div className="joint3-thq-frame1059-elm4 joint3-thq-left-icon">
        <img
          alt="Frame1061I734"
          src={iconSrc}
          className="joint3-thq-frame1061-elm4"
        />
      </div>

      <div className="joint3-thq-frame5-elm4">
        <span className="joint3-thq-text-elm179">{text}</span>
      </div>

      {/* Оригинальная картинка справа */}
      <div className="joint3-thq-frame1059-elm4 joint3-thq-right-icon">
        <img
          alt="Frame1061I734"
          src={iconSrc}
          className="joint3-thq-frame1061-elm4"
        />
      </div>
    </div>
  )
}

export default ActionButtonWhiteSmallText