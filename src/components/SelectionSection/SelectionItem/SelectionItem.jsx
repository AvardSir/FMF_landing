// SelectionItem.jsx (или .tsx)
import React from "react";
import "./SelectionItem.css";

export function SelectionItem({ age, text, variant = "under" }) {
  // variant: "under" — синий фон (UnderSelectionPart), "white" — белый фон (WhiteSelection)
  const containerClass = variant === "white" 
    ? "joint3-thq-frame277130176-elm" 
    : "joint3-thq-frame277130175-elm";
  
  const ageClass = variant === "white" 
    ? "joint3-thq-text-elm117" 
    : "joint3-thq-text-elm115";
  
  const textClass = variant === "white" 
    ? "joint3-thq-text-elm118" 
    : "joint3-thq-text-elm116";

  return (
    <div className={containerClass}>
      <span className={ageClass}>{age}</span>
      <span className={textClass}>{text}</span>
    </div>
  );
}