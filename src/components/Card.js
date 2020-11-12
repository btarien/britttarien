import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
  <a href={props.href}>
    <div className="card">
      <h2>{props.title}</h2>
      <img src={props.img} alt="" />
    </div>
  </a>
  );
}
