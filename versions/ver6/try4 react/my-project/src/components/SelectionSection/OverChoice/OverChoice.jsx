// OverChoice.jsx (или .tsx)
import React from "react";
import "./OverChoice.css";
// import LeftRightArrow from "../LeftRightArrow/LeftRightArrow";
// import SelectionItem from "../SelectionItem/SelectionItem";
import { LeftRightArrow } from './../../LeftRightArrow/LeftRightArrow';
import { SelectionItem } from "../SelectionItem/SelectionItem";

export function OverChoice({ items = [] }) {
  // items — массив объектов: { age: string, text: string, variant: "under" | "white" }
  // Если массив не передан, используются дефолтные значения
  const defaultItems = [
    { age: "18+ лет", text: "Поддержка суставов при травмах", variant: "under" },
    { age: "35+ лет", text: "Профилактика возрастных изменений", variant: "white" },
    { age: "45+", text: "Сохранение здоровья у женщин", variant: "under" },
  ];

  const data = items.length > 0 ? items : defaultItems;
// LeftRightArrow
  return (
    <div className="joint3-thq-frame277130179-elm">
      <LeftRightArrow />
      {/* LeftRightArrow
      LeftRightArrow */}
      {/* LeftRightArrow */}
      
      <div className="joint3-thq-frame277130178-elm">
        {data.map((item, index) => (
            // SelectionItem
          <SelectionItem
            key={index}
            age={item.age}
            text={item.text}
            variant={item.variant}
          />
        ))}
      </div>
    </div>
  );
}