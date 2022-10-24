import React from "react";
import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

const Scoreboard = () => {
  const { score, plusScore, minusScore } = useContext(ScoreContext);
  return (
    <div>
      <h2>Scoreboard</h2>
      <h3>Your Current Score is: {score} </h3>
      <button onClick={plusScore}>+</button>
      <button onClick={minusScore}>-</button>
    </div>
  );
};

export default Scoreboard;
