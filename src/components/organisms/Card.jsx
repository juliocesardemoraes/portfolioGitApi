import Label from "../molecules/Label";
import "./styles/card.css";

const nameToColor = {
  javascript: "blue",
};

function Card({ item }) {
  return (
    <div className="project__card">
      <img />
      <div className="project__card__info">
        <h3>{item?.name}</h3>
        <h5>{item?.language}</h5>
        <div className="project__card__info__labels">
          {item.topics.map((topic) => {
            return (
              <>
                <Label name={topic} color={nameToColor[topic]}></Label>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
