import { useGameContext } from "../provider/game-provider";

export const SelectPlayer = () => {
  const { player, setPlayer } = useGameContext();

  return (
    <div className="flex justify-center mb-4">
      <button
        className={`px-4 py-2 mx-2 ${
          player === "X" ? "bg-blue-500" : "bg-gray-300"
        } text-white rounded`}
        onClick={() => setPlayer("X")}
      >
        X
      </button>
      <button
        className={`px-4 py-2 mx-2 ${
          player === "O" ? "bg-blue-500" : "bg-gray-300"
        } text-white rounded`}
        onClick={() => setPlayer("O")}
      >
        O
      </button>
      {/* <button
    className={`px-4 py-2 mx-2 ${
      isComputerPlaying ? "bg-red-500" : "bg-gray-300"
    } text-white rounded`}
    onClick={toggleComputerPlaying}
  >
    {isComputerPlaying ? "Disable Computer" : "Enable Computer"}
  </button> */}
    </div>
  );
};
