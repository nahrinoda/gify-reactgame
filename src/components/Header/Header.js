import React from "react";
import "./Header.css";

const Header = props => (

<div>
  <nav className="fixed-top navbar">
    <div className="row">
      <h1 className="col-sm">
        Clicky Game
      </h1> 
      <div className="col-sm" id="directions">
        <p className="col-sm">Click an image to earn points, but don't click on any more than once!</p>
      </div>
      <div className="col-sm" id="directions">
        <div className="row">
          <span className="col-sm" id="score">Score:  {props.score} | Highscore: {props.highScore} </span>
        </div>
        <div className="row guess">
          <p id="guessMsg">{props.msg}</p>
        </div>
      </div>
    </div>
  </nav> 
</div>
);
export default Header;