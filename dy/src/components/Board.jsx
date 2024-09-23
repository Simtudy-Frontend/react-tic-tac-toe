import React, { useState } from "react";
import Square from "./Square";
import { useDispatch, useSelector } from "react-redux";
import { calculateWinner, playTurn } from "../store";

const Board = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.game.history);
  const stepNumber = useSelector((state) => state.game.stepNumber);
  const isXNext = useSelector((state) => state.game.isXNext);
  const squares = history[stepNumber];

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (isXNext ? "X" : "O");

  const handleClick = (i) => {
    dispatch(playTurn(i));
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
