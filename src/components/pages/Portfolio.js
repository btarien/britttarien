import React from "react";
import "./Portfolio.css";
import Card from "../Card.js";
import WebsiteImg from "./media/website.png";
import CalculatorImg from "./media/calculator.png";
import MazeImg from "./media/maze.png";
import MatchUpImg from "./media/match-up.png";
import TodoImg from "./media/to-do.png";
import RowImg from "./media/row.png";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="cards">
        <Card title="Website" img={WebsiteImg} href="home" />
        <Card title="Calculator" img={CalculatorImg} href="" />
        <Card title="Maze Game" img={MazeImg} />
        <Card title="Match Up" img={MatchUpImg} href="/matchup" />
        <Card title="To-Do List" img={TodoImg} />
        <Card title="Row Tracker" img={RowImg} />
      </div>
    </div>
  );
}
