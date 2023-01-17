import React from "react";
import CardImage from "../images/katie-zaferes.png";
import Star from "../images/star.png";

function Card() {
  return (
    <div className="card">
      <img className="card--image" src={CardImage} alt="katie zaferes swimmer" />
      <div className="card--stats">
        <img className="card--star" src={Star} alt="card one star" />
        <span>5</span>
        <span className="faint reviews">(6) • </span>
        <span className="faint">USA</span>
      </div>

      <p className="card--summary">Life lessons with Katie Zaferes</p>
      <p className="card--pricing">
        <strong className="bold">From $136</strong>/person
      </p>
    </div>
  );
}

export default Card;
