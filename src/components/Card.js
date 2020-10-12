import React from "react";
import { Link } from "react-scroll";
import "./Card.css";

export default function Card(props) {
  return (
    <Link to={props.href}>
      <div className="card">
        <h2>{props.title}</h2>
        <img src={props.img} alt="" />
      </div>
    </Link>
  );
}
