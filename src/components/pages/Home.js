import React from "react";
import "./Home.css";
import websiteCover from "./media/website-cover.mp4";

export default function Home() {
  return (
    <>
      <div id="home">
        <video src={websiteCover} autoPlay loop muted />
        <h1>Hi, I'm Britt</h1>
        <p>Welcome to my interactive resume and portfolio</p>
      </div>
    </>
  );
}
