/* eslint-disable react/prop-types */
import Star from "./images/Star 1.svg";

import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" className="card--image" />
      <div className="card--stats">
        <img src={Star} alt="" className="card--star" />
        <span>5.0</span>
        <span className="gray">({props.reviewCount}) .</span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price} /</span> person
      </p>
    </div>
  );
}
