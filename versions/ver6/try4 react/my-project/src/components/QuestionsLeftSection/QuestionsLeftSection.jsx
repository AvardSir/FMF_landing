import React, { useState } from "react";
import "./QuestionsLeftSection.css";
import MaxLogo from "../MaxLogo/MaxLogo";
import ActionButtonBlueMediumText from "../hoverButtons/ActionButtonBlueMediumText/ActionButtonBlueMediumText";
// import ActionButtonBlueMediumText
export function QuestionsLeftSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Сброс ошибки при вводе
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!formData.phone.trim()) newErrors.phone = "Введите телефон";
    else if (!/^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/.test(formData.phone.trim()))
      newErrors.phone = "Формат: +7 (___) ___-__-__";
    if (!formData.email.trim()) newErrors.email = "Введите email";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Некорректный email";
    if (!consent) newErrors.consent = "Необходимо согласие";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Имитация отправки данных
    console.log("Отправка формы:", { ...formData, consent });
    setSubmitted(true);
    // Можно добавить реальный запрос к API
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
              <span className="joint3-thq-text-elm191">info@test.ru</span>
            </div>
            <div className="joint3-thq-frame70-elm">
              <span className="joint3-thq-text-elm192">Мессенджеры</span>
              <div className="joint3-thq-frame71-elm">
                <img
                  alt="Telegram"
                  src="public/logostelegram7286-9tf.svg"
                  className="joint3-thq-logostelegram-elm1"
                />
                <MaxLogo />
                <img
                  alt="WhatsApp"
                  src="public/logostelegram7286-26se.svg"
                  className="joint3-thq-logostelegram-elm3"
                />
                <img
                  alt="Viber"
                  src="public/logostelegram7287-0rp.svg"
                  className="joint3-thq-logostelegram-elm4"
                />
              </div>
            </div>
          </div>

          <form
            className="joint3-thq-frame1117-elm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="joint3-thq-frame1116-elm">
              <div className="joint3-thq-frame46-elm">
                {/* Поле Имя */}
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
                        className="joint3-thq-text-elm194"
                        style={{
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: "Onest",
                          color: "#1c1c1c",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  {errors.name && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Поле Телефон */}
                <div className="joint3-thq-frame47-elm">
                  <span className="joint3-thq-text-elm195">Телефон</span>
                  <div className="joint3-thq-frame48-elm3">
                    <div className="joint3-thq-frame49-elm2">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        className="joint3-thq-text-elm196"
                        style={{
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: "Onest",
                          color: "#1c1c1c",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  {errors.phone && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Поле Эл. почта */}
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
                        className="joint3-thq-text-elm198"
                        style={{
                          width: "100%",
                          border: "none",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: "Onest",
                          color: "#1c1c1c",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  {errors.email && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Чекбокс согласия */}
              <div className="joint3-thq-frame72-elm">
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (errors.consent)
                        setErrors((prev) => ({ ...prev, consent: "" }));
                    }}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "4px",
                      accentColor: "#3193cc", // можно стилизовать под дизайн
                    }}
                  />
                  <span
                    className="joint3-thq-text-elm199"
                    style={{ color: errors.consent ? "red" : "#7f7f7f" }}
                  >
                    Я даю свое согласие на обработку персональных данных
                  </span>
                </label>
                {errors.consent && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.consent}
                  </span>
                )}
              </div>
            </div>

            <ActionButtonBlueMediumText
              text={submitted ? "Отправлено" : "Оставить заявку"}
              onClick={() => {
                if (!submitted) {
                  // кнопка внутри формы — вызовется submit через form
                } else {
                  resetForm();
                }
              }}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}