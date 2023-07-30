import React from "react";

export const FinishScreen = ({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        {Math.ceil(percentage)} %
      </p>
      <p className="highscore">(HighScore:{highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart a quiz
      </button>
      )
    </>
  );
};
