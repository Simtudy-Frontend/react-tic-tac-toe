import { calculateWinner } from "@/game/utils";
import { ResetButton, Square } from ".";
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
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 ">
        <h3 className="text-xl 2xl:text-3xl font-semibold text-center text-gray-700">
          {status}
        </h3>
        <ResetButton />
      </div>

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
