import { useGameContext } from "../provider/game-provider";

export const SelectPlayer = () => {
  const { player, setPlayer, currentMove } = useGameContext();
  const isGameStarted = currentMove > 0;
  return (
    <div className="flex justify-center mb-4">
      <button
        className={`px-4 py-2 mx-2 disabled:opacity-30 ${
          player === "X" ? "bg-blue-500" : "bg-gray-300"
        } text-white rounded`}
        onClick={() => setPlayer("X")}
        disabled={isGameStarted}
      >
        X
      </button>
      <button
        className={`px-4 py-2 mx-2 disabled:opacity-30 ${
          player === "O" ? "bg-blue-500" : "bg-gray-300"
        } text-white rounded`}
        onClick={() => setPlayer("O")}
        disabled={isGameStarted}
      >
        O
      </button>
    </div>
  );
};
