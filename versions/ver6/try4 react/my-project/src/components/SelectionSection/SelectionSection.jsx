import React from 'react';
// Предполагается, что LeftRightArrow — это отдельный компонент, который нужно импортировать
// import LeftRightArrow from './LeftRightArrow';
import { LeftRightArrow } from './../LeftRightArrow/LeftRightArrow';
import './SelectionSection.css'

const SelectionSection = () => {
  return (
    <div className="joint3-thq-frame1076-elm">
        
      <section id="for-whom"></section>
      <img
        alt="Rectangle356761"
        src="public/rectangle356761-jsri-900h.png"
        className="joint3-thq-rectangle35-elm"
      />
      
      <img
        alt="Vector466761"
        src="public/vector466761-x0yv.svg"
        className="joint3-thq-vector46-elm"
      />
      <span className="joint3-thq-text-elm114">
        
        Подходит для всех, кто заботиться о своем здоровье
        и думает о своем будущем заранее.
      </span>
      <div className="joint3-thq-frame277130179-elm">
        <LeftRightArrow />
        
        <div className="joint3-thq-frame277130178-elm">
          <div className="joint3-thq-frame277130175-elm">
            <span className="joint3-thq-text-elm115">18+ лет</span>
            <span className="joint3-thq-text-elm116">
              Поддержка суставов при травмах
            </span>
          </div>
          <div className="joint3-thq-frame277130176-elm">
            <span className="joint3-thq-text-elm117">35+ лет</span>
            <span className="joint3-thq-text-elm118">
              Профилактика возрастных изменений
            </span>
          </div>
          <div className="joint3-thq-frame277130177-elm">
            <span className="joint3-thq-text-elm119">45+</span>
            <span className="joint3-thq-text-elm120">
              Сохранение здоровья у женщин
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionSection;