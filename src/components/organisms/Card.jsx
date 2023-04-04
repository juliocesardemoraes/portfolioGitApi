import React from "react";
import Label from "../molecules/Label";
import "./styles/card.css";

const nameToColor = {
  javascript: "blue",
};

const handleError = (name) => {
  console.log("ERROR", name);
};

function Card({ item, setWebsite, key }) {
  //`https://raw.githubusercontent.com/juliocesardemoraes/${item.name}/main/public/FinalLogo.png`
  const logoImg = `https://raw.githubusercontent.com/juliocesardemoraes/${item.name}/main/public/FinalLogo.png`;

  return (
    <div
      className="project__card"
      onClick={() => setWebsite(item.homepage)}
      key={key}
    >
      <img
        src={
          `https://raw.githubusercontent.com/juliocesardemoraes/${item.name}/main/public/FinalLogo.png` ||
          "./avatarPlaceholders/2.svg"
        }
        onError={(e) => {
          e.target.src = "./avatarPlaceholders/1.svg";
        }}
      />
      <div className="project__card__info">
        <h3>{item?.name}</h3>
        <h5>{item?.language}</h5>
        <div className="project__card__info__labels">
          {item.topics.map((topic) => {
            return (
              <React.Fragment key={topic}>
                <Label name={topic} color={nameToColor[topic]}></Label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
