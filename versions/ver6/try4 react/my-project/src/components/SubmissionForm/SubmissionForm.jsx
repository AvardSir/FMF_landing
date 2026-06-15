// SubmissionForm.jsx (или .tsx)
import React, { useState, useCallback } from "react";
import "./SubmissionForm.css";
import SubmitButton from './../hoverButtons/SubmitButton/SubmitButton';

// Функция форматирования телефона под маску +7 (XXX) XXX-XX-XX
const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (!digits.startsWith("7")) {
    return `+7 (${digits.slice(0, 3)}${digits.length > 3 ? ") " + digits.slice(3, 6) : ""}${digits.length > 6 ? "-" + digits.slice(6, 8) : ""}${digits.length > 8 ? "-" + digits.slice(8, 10) : ""}`;
  }
  let formatted = "+7";
  if (digits.length > 1) formatted += ` (${digits.slice(1, 4)}`;
  if (digits.length > 4) formatted += `) ${digits.slice(4, 7)}`;
  if (digits.length > 7) formatted += `-${digits.slice(7, 9)}`;
  if (digits.length > 9) formatted += `-${digits.slice(9, 11)}`;
  return formatted;
};

export function SubmissionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = useCallback((e) => {
    const rawValue = e.target.value;
    const formatted = formatPhone(rawValue);
    setFormData((prev) => ({ ...prev, phone: formatted }));
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
    
    // Если уже отправлено — сбрасываем форму
    if (submitted) {
      resetForm();
      return;
    }

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введите имя";
    }
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
    if (!consent) {
      newErrors.consent = "Необходимо согласие на обработку данных";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Отправка данных
    setIsSubmitting(true);
    
    if (onSubmit) {
      onSubmit({
        ...formData,
        phoneDigits: formData.phone.replace(/\D/g, ""),
        consent,
      });
    }
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Автоматический сброс через 10 секунд
    setTimeout(() => {
      resetForm();
    }, 10000);
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", email: "" });
    setConsent(false);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <form
      className="joint3-thq-frame1117-elm"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="joint3-thq-frame1116-elm">
        <div className="joint3-thq-frame46-elm">
          {/* Имя */}
          <div className="joint3-thq-frame48-elm1">
            <span className="joint3-thq-text-elm193">Имя</span>
            <div className="joint3-thq-frame48-elm2">
              <div className="joint3-thq-frame49-elm1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Как к вам обращаться"
                  className={`submission-form-input ${errors.name ? 'submission-form-input-error' : ''}`}
                  disabled={submitted}
                />
              </div>
            </div>
            {errors.name && (
              <span className="submission-form-error">{errors.name}</span>
            )}
          </div>

          {/* Телефон с маской */}
          <div className="joint3-thq-frame47-elm">
            <span className="joint3-thq-text-elm195">Телефон</span>
            <div className="joint3-thq-frame48-elm3">
              <div className="joint3-thq-frame49-elm2">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (___) ___-__-__"
                  className={`submission-form-input ${errors.phone ? 'submission-form-input-error' : ''}`}
                  disabled={submitted}
                />
              </div>
            </div>
            {errors.phone && (
              <span className="submission-form-error">{errors.phone}</span>
            )}
          </div>

          {/* Email */}
          <div className="joint3-thq-frame49-elm3">
            <span className="joint3-thq-text-elm197">Эл. почта</span>
            <div className="joint3-thq-frame48-elm4">
              <div className="joint3-thq-frame49-elm4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ваша эл.почта"
                  className={`submission-form-input ${errors.email ? 'submission-form-input-error' : ''}`}
                  disabled={submitted}
                />
              </div>
            </div>
            {errors.email && (
              <span className="submission-form-error">{errors.email}</span>
            )}
          </div>
        </div>

        {/* Чекбокс согласия */}
        <div className="joint3-thq-frame72-elm">
          <label className="submission-form-consent-label">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent)
                  setErrors((prev) => ({ ...prev, consent: "" }));
              }}
              className={`submission-form-checkbox ${errors.consent ? 'submission-form-checkbox-error' : ''}`}
              disabled={submitted}
            />
            <span
              className={`joint3-thq-text-elm199 submission-form-consent-text ${errors.consent ? 'submission-form-consent-text-error' : ''}`}
            >
              Я даю свое согласие на обработку персональных данных
            </span>
          </label>
          {errors.consent && (
            <span className="submission-form-error">{errors.consent}</span>
          )}
        </div>
      </div>

      <SubmitButton
        text={submitted ? "Всё успешно отправлено" : "Оставить заявку"}
        onClick={() => {
          // Кнопка вызывает submit формы
        }}
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
}