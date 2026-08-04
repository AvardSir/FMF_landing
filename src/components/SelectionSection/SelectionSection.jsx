import React from 'react';
// Предполагается, что LeftRightArrow — это отдельный компонент, который нужно импортировать
// import LeftRightArrow from './LeftRightArrow';
import { LeftRightArrow } from './../LeftRightArrow/LeftRightArrow';
import './SelectionSection.css'
import { UnderSelectionPart } from './UnderSelectionPart/UnderSelectionPart';
import { WhiteSelection } from './WhiteSelection/WhiteSelection';
import { SelectionItem } from './SelectionItem/SelectionItem';
import { OverChoice } from './OverChoice/OverChoice';

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


            {/* OverChoice */}
            <OverChoice />

            {/* <div className="joint3-thq-frame277130179-elm">
                <LeftRightArrow />

                <div className="joint3-thq-frame277130178-elm">

                    <SelectionItem age="18+ лет" text="Поддержка суставов при травмах" variant="under" />
                    <SelectionItem age="35+ лет" text="Профилактика возрастных изменений" variant="white" />


                    <SelectionItem
                        age="45+ "
                        text="Сохранение здоровья у женщин"
                        variant="under"
                    />

                </div>



            </div> */}
        </div>
    );
};

export default SelectionSection;