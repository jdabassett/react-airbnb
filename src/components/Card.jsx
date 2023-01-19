import React from "react";
import Star from "../images/star.png";

// id: 1,
// title: "Life Lessons with Katie Zaferes",
// description: "I
// price: 136,
// coverImg: "katie-zaferes.png",
// stats: {
//     rating: 5.0,
//     reviewCount: 6
// },
// location: "Online",
// openSpots: 0,

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="card--image"
        src={require("../images/" + props.item.coverImg)}
        alt={"photo of " + props.item.coverImg}
      />
      <div className="card--stats">
        <img className="card--star" src={Star} alt="card one star" />
        <span>{props.item.stats.rating}</span>
        <span className="faint reviews">
          ({props.item.stats.reviewCount}) •{" "}
        </span>
        <span className="faint">{props.item.location}</span>
      </div>

      <p className="card--summary">{props.item.title}</p>
      <p className="card--pricing">
        <strong className="bold">From ${props.item.price}</strong>/person
      </p>
    </div>
  );
}

export default Card;
