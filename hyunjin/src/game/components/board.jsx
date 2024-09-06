import { calculateWinner } from "@/game/utils";
import { Square } from ".";
import { useGameContext } from "../provider/game-provider";

export const Board = () => {
  const {
    xIsNext,
    handlePlay: onPlay,
    currentSquares: squares,
  } = useGameContext();

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <h3 className="mb-2.5">{status}</h3>
      {[0, 3, 6].map((row) => (
        <div
          key={row}
          className="clearfix after:content-[''] after:table after:clear-both"
        >
          <Square value={squares[row]} onSquareClick={() => handleClick(row)} />
          <Square
            value={squares[row + 1]}
            onSquareClick={() => handleClick(row + 1)}
          />
          <Square
            value={squares[row + 2]}
            onSquareClick={() => handleClick(row + 2)}
          />
        </div>
      ))}
    </div>
  );
};
