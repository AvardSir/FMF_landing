// LeftRightArrow.jsx
import './LeftRightArrow.css'

export function LeftRightArrow({ onLeftClick, onRightClick }) {
  return (
    <div className="joint3-thq-frame42-elm">
      <img 
        alt="Frame406761" 
        src="/public/frame406761-hjgq.svg"  
        className="joint3-thq-frame40-elm"
        onClick={onLeftClick}
        style={{ cursor: "pointer" }}
      />
      <img 
        alt="Frame416761" 
        src="/public/frame416761-l4m.svg"   
        className="joint3-thq-frame41-elm"
        onClick={onRightClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  )
}