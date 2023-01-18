import React from "react";
import Star from "../images/star.png";

function Card(props) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={require("../images/" + props.img)}
        alt={"photo of " + props.img}
      />
      <div className="card--stats">
        <img className="card--star" src={Star} alt="card one star" />
        <span>{props.rating}</span>
        <span className="faint reviews">({props.reviewCount}) • </span>
        <span className="faint">{props.country}</span>
      </div>

      <p className="card--summary">{props.title}</p>
      <p className="card--pricing">
        <strong className="bold">From ${props.price}</strong>/person
      </p>
    </div>
  );
}

export default Card;
