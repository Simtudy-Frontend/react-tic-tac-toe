import { Square, LoadingSpinner } from ".";
import { useGameContext } from "../provider/game-provider";
import { useEffect } from "react";

export const Board = () => {
  const {
    xIsNext,
    handlePlay: onPlay,
    currentSquares: squares,
    player,
    computerPlay,
    winner,
    isPending,
  } = useGameContext();

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? player : player === "X" ? "O" : "X";
    onPlay(nextSquares);
  };

  useEffect(() => {
    if (!isPending && !xIsNext && !winner) {
      computerPlay();
    }
  }, [xIsNext, squares, winner, computerPlay, isPending]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {isPending && <LoadingSpinner />}
      {[0, 3, 6].map((row) => (
        <div key={row} className="flex">
          <Square value={squares[row]} onClick={() => handleClick(row)} />
          <Square
            value={squares[row + 1]}
            onClick={() => handleClick(row + 1)}
          />
          <Square
            value={squares[row + 2]}
            onClick={() => handleClick(row + 2)}
          />
        </div>
      ))}
    </div>
  );
};
