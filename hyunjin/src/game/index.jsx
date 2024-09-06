import { useState } from "react";
import { Board, HistoryList } from "./components";

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  return (
    <section className="flex flex-row">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <HistoryList data={history} jumpTo={jumpTo} />
    </section>
  );
};
