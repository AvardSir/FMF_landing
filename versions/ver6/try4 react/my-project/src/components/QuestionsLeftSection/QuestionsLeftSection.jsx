import React from "react";
import "./QuestionsLeftSection.css"
import MaxLogo from "../MaxLogo/MaxLogo";
import ActionButtonBlueMediumText from "../hoverButtons/ActionButtonBlueMediumText/ActionButtonBlueMediumText ";
export function QuestionsLeftSection({ }) {
    return <div className="joint3-thq-group5-elm">
        <div className="joint3-thq-frame1119-elm">
            <div className="joint3-thq-frame55-elm">
                <span className="joint3-thq-text-elm189">
                    Остались вопросы? Напишите нам
                </span>
            </div>
            <div className="joint3-thq-frame1118-elm">
                <div className="joint3-thq-frame1115-elm">
                    <div className="joint3-thq-frame64-elm2">
                        <span className="joint3-thq-text-elm190">Эл. почта</span>
                        <span className="joint3-thq-text-elm191">info@test.ru</span>
                    </div>
                    <div className="joint3-thq-frame70-elm">
                        <span className="joint3-thq-text-elm192">Мессенджеры</span>
                        <div className="joint3-thq-frame71-elm">
                            <img alt="logostelegram7286" src="public/logostelegram7286-9tf.svg" className="joint3-thq-logostelegram-elm1" />

                            <MaxLogo />

                            <img alt="logostelegram7286" src="public/logostelegram7286-26se.svg" className="joint3-thq-logostelegram-elm3" />
                            <img alt="logostelegram7287" src="public/logostelegram7287-0rp.svg" className="joint3-thq-logostelegram-elm4" />
                        </div>
                    </div>
                </div>
                <div className="joint3-thq-frame1117-elm">
                    <div className="joint3-thq-frame1116-elm">
                        <div className="joint3-thq-frame46-elm">
                            <div className="joint3-thq-frame48-elm1">
                                <span className="joint3-thq-text-elm193">Имя</span>
                                <div className="joint3-thq-frame48-elm2">
                                    <div className="joint3-thq-frame49-elm1">
                                        <span className="joint3-thq-text-elm194">
                                            Как к вам обращаться
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="joint3-thq-frame47-elm">
                                <span className="joint3-thq-text-elm195">Телефон</span>
                                <div className="joint3-thq-frame48-elm3">
                                    <div className="joint3-thq-frame49-elm2">
                                        <span className="joint3-thq-text-elm196">
                                            +7 (___) ___-__-__
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="joint3-thq-frame49-elm3">
                                <span className="joint3-thq-text-elm197">Эл. почта</span>
                                <div className="joint3-thq-frame48-elm4">
                                    <div className="joint3-thq-frame49-elm4">
                                        <span className="joint3-thq-text-elm198">
                                            Ваша эл.почта
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="joint3-thq-frame72-elm">
                            <img alt="Rectangle117287" src="public/rectangle117287-xel-200h.png" className="joint3-thq-rectangle11-elm" />
                            <span className="joint3-thq-text-elm199">
                                <span className="joint3-thq-text-elm200">
                                    Я даю свое согласие на обработку персональных данных
                                </span>

                            </span>
                        </div>
                    </div>


                    <ActionButtonBlueMediumText text='Оставить заявку'> </ActionButtonBlueMediumText>
                   
                </div>
            </div>
        </div>
    </div>;
}
