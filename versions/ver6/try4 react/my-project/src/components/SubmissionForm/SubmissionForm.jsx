import React, { useState, useCallback, useMemo } from "react";
import "./SubmissionForm.css";
import SubmitButton from './../hoverButtons/SubmitButton/SubmitButton';

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
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Функция валидации формы
  const validateForm = useCallback(() => {
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, consent]);

  // Проверка, все ли поля валидны в реальном времени
  const isFormValid = useMemo(() => {
    const hasErrors = Object.keys(errors).length > 0;
    const hasEmptyFields = !formData.name.trim() || 
                          !formData.phone.trim() || 
                          !formData.email.trim() ||
                          !consent;
    
    // Дополнительная проверка телефона
    const phoneValid = formData.phone.replace(/\D/g, "").length === 11;
    
    // Дополнительная проверка email
    const emailValid = /\S+@\S+\.\S+/.test(formData.email);
    
    const isValid = formData.name.trim() && 
                   phoneValid && 
                   emailValid && 
                   consent && 
                   !hasErrors;
    
    return isValid;
  }, [formData, consent, errors]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (submitted) {
      resetForm();
      return;
    }

    // Валидация перед отправкой
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    // Отправка данных
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit({
          ...formData,
          phoneDigits: formData.phone.replace(/\D/g, ""),
          consent,
        });
      }
      
      setSubmitted(true);
      setSubmitSuccess(true); // Триггерим успешное состояние кнопки
      
      // Автоматический сброс через 3 секунды после успеха
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      // Можно добавить обработку ошибки
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", email: "" });
    setConsent(false);
    setErrors({});
    setSubmitted(false);
    setSubmitSuccess(false);
  };

  // Обработчик сброса успешного состояния кнопки
  const handleSuccessReset = () => {
    setSubmitSuccess(false);
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
                  onBlur={() => validateForm()}
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
                  onBlur={() => validateForm()}
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
                  onBlur={() => validateForm()}
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
                if (errors.consent) {
                  setErrors((prev) => ({ ...prev, consent: "" }));
                }
                validateForm();
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
        text="Оставить заявку"
        successText="Всё успешно отправлено"
        onClick={() => {}}
        type="submit"
        disabled={isSubmitting}
        isValid={isFormValid}
        isSubmitSuccess={submitSuccess}
        onSuccessReset={handleSuccessReset}
      />
    </form>
  );
}