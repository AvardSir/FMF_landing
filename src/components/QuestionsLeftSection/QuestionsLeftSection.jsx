import React, { useState, useCallback } from "react";
import "./QuestionsLeftSection.css";
// import MaxLogo from "../MaxLogo/MaxLogo";
import MaxLogo from "../MaxLogo/MaxLogo";
// import ActionButtonBlueMediumText from "../hoverButtons/ActionButtonBlueMediumText/ActionButtonBlueMediumText";
import ActionButtonBlueMediumText from "../hoverButtons/ActionButtonBlueMediumText/ActionButtonBlueMediumText";
import SubmitButton from './../hoverButtons/SubmitButton/SubmitButton';
import { SubmissionForm } from './../SubmissionForm/SubmissionForm';
// Функция форматирования телефона под маску +7 (XXX) XXX-XX-XX
const formatPhone = (value) => {
    // Оставляем только цифры, максимум 11 (первая всегда 7, остальные 10)
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length === 0) return "";
    // Если начинается не с 7, принудительно добавляем 7 (можно убрать, если нужна свобода)
    if (!digits.startsWith("7")) {
        return `+7 (${digits.slice(0, 3)}${digits.length > 3 ? ") " + digits.slice(3, 6) : ""}${digits.length > 6 ? "-" + digits.slice(6, 8) : ""}${digits.length > 8 ? "-" + digits.slice(8, 10) : ""}`;
    }
    // Основной шаблон
    let formatted = "+7";
    if (digits.length > 1) {
        formatted += ` (${digits.slice(1, 4)}`;
    }
    if (digits.length > 4) {
        formatted += `) ${digits.slice(4, 7)}`;
    }
    if (digits.length > 7) {
        formatted += `-${digits.slice(7, 9)}`;
    }
    if (digits.length > 9) {
        formatted += `-${digits.slice(9, 11)}`;
    }
    return formatted;
};

export function QuestionsLeftSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handlePhoneChange = useCallback((e) => {
        const rawValue = e.target.value;
        const formatted = formatPhone(rawValue);
        setFormData((prev) => ({ ...prev, phone: formatted }));
        // Сброс ошибки при вводе
        if (errors.phone) {
            setErrors((prev) => ({ ...prev, phone: "" }));
        }
    }, [errors.phone]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Введите имя";
        // Проверка полного номера: ровно 15 символов с маской (без учёта пробелов и скобок — 11 цифр)
        if (!formData.phone.trim()) {
            newErrors.phone = "Введите телефон";
        } else if (formData.phone.replace(/\D/g, "").length !== 11) {
            newErrors.phone = "Введите номер полностью";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Введите email";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Некорректный email";
        }
        if (!consent) newErrors.consent = "Необходимо согласие";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Имитация отправки
        console.log("Отправка формы:", {
            ...formData,
            phoneDigits: formData.phone.replace(/\D/g, ""),
            consent,
        });
        setSubmitted(true);
    };

    const resetForm = () => {
        setFormData({ name: "", phone: "", email: "" });
        setConsent(false);
        setErrors({});
        setSubmitted(false);
    };

    return (
        <div className="joint3-thq-group5-elm">
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
                            <a
                                href="mailto:info@test.ru"
                                className="joint3-thq-text-elm191"
                                style={{ color: '#3193cc', textDecoration: 'underline' }}
                            >
                                info@test.ru
                            </a>            </div>
                        <div className="joint3-thq-frame70-elm">
                            <span className="joint3-thq-text-elm192">Мессенджеры</span>

                            <div className="joint3-thq-frame71-elm">
                                <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                    <img
                                        alt="Telegram"
                                        src="public/logostelegram7286-9tf.svg"
                                        className="joint3-thq-logostelegram-elm1"
                                    />
                                </a>

                                <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                    <MaxLogo />
                                </a>

                                <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                    <img
                                        alt="WhatsApp"
                                        src="public/logostelegram7286-26se.svg"
                                        className="joint3-thq-logostelegram-elm3"
                                    />
                                </a>

                                <a href="viber://chat?number=your_number" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                    <img
                                        alt="Viber"
                                        src="public/logostelegram7287-0rp.svg"
                                        className="joint3-thq-logostelegram-elm4"
                                    />
                                </a>


                            </div>



                        </div>
                    </div>
                    <SubmissionForm />
                    
                </div>
            </div>
        </div>
    );
}