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
        <Card title="Calculator" img={CalculatorImg} href="https://github.com/btarien/calculator" />
        <Card title="Maze Game" img={MazeImg}
          href="https://btarien.github.io/maze/"
          />
        <Card
          title="Match Up"
          img={MatchUpImg}
          href="https://btarien.github.io/matchup/"
        />
        <Card title="To-Do List" img={TodoImg} href="https://github.com/btarien/to-do" />
        <Card title="Row Tracker" img={RowImg} href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0225690" />
      </div>
    </div>
  );
}
