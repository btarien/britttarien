import React from "react";
import "./ProgressBar.css";

export default function ProgressBar(props) {
  return (
    <div className="bar-container">
      <div className="bar" style={{ width: `${props.percent}%`}}></div>
      <p>{props.text}</p>
      <span className="percentage">{`${props.percent}%`}</span>
    </div>
  );
}
