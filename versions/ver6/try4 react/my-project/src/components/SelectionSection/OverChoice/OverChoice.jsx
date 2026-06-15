// OverChoice.jsx (или .tsx)
import React, { useState } from "react";
import "./OverChoice.css";
import { LeftRightArrow } from './../../LeftRightArrow/LeftRightArrow';
import { SelectionItem } from "../SelectionItem/SelectionItem";

export function OverChoice({ items = [] }) {
  const defaultItems = [
    { age: "18+ лет", text: "Поддержка суставов при травмах" },
    { age: "35+ лет", text: "Профилактика возрастных изменений" },
    { age: "45+", text: "Сохранение здоровья у женщин" },
  ];

  const data = items.length > 0 ? items : defaultItems;
  
  // Индекс выбранного элемента (по умолчанию — середина)
  const [activeIndex, setActiveIndex] = useState(Math.floor(data.length / 2));

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="joint3-thq-frame277130179-elm">
      <div onClick={goToPrev} style={{ cursor: "pointer" }}>
        <LeftRightArrow direction="left" />
      </div>
      
      <div className="joint3-thq-frame277130178-elm">
        {data.map((item, index) => (
          <SelectionItem
            key={index}
            age={item.age}
            text={item.text}
            variant={index === activeIndex ? "white" : "under"}
          />
        ))}
      </div>

      {/* <div onClick={goToNext} style={{ cursor: "pointer" }}>
        <LeftRightArrow direction="right" />
      </div> */}
    </div>
  );
}