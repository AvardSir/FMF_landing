import './ButtonWhite.css';

export default function ButtonWhite({ text = "Оставить заявку" }) {
  return (
    <div className="btn-white">
      {/* Левая иконка (изначально скрыта) */}
      <div className="btn-white__icon btn-white__icon--left">
        <img src="/frame1061i734-1gkq.svg" alt="" />
      </div>

      {/* Текст */}
      <span className="btn-white__text">{text}</span>

      {/* Правая иконка (видна) */}
      <div className="btn-white__icon btn-white__icon--right">
        <img src="/frame1061i734-1gkq.svg" alt="" />
      </div>
    </div>
  );
}