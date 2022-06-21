import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="name">
        <h3>{props.englishName}</h3>
        <h2 className="arabicName">{props.arabicName}</h2>
      </div>
      <div className="number">
        <h3>{props.translation}</h3>
        <span>{props.revelationType}</span>
        <p>Surah Number: {props.number}</p>
      </div>
    </div>
  );
}

export default Card;
