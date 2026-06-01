import React from 'react'
import './StikyJar.css'

const StikyJar = ({ 
  imageSrc = "public/image146761-6dy-500h.png",
  altText = "IMAGE146761",
  top = "2020px",
  left = "715px",
  sticky = false,
  stickyTop = "100px",
  className = ""
}) => {
  const customStyle = {
    top: top,
    left: left
  }

  return (
    <div 
      className={`joint3-thq-frame1079-elm ${sticky ? 'sticky' : ''} ${className}`}
      style={customStyle}
    >
      <div className="joint3-thq-frame1068-elm">
        <img 
          alt={altText} 
          src={imageSrc} 
          className="joint3-thq-image14-elm2" 
        />
      </div>
    </div>
  )
}

export default StikyJar