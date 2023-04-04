import "./styles/label.css";

function Label({ name, color = "pink" }) {
  return (
    <div className={`project__card__info__labels__label ${color}`}>
      <span>{name}</span>
    </div>
  );
}

export default Label;
