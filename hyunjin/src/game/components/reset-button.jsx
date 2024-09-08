import { useGameContext } from "../provider/game-provider";

export const ResetButton = () => {
  const { handleResetGame } = useGameContext();

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      onClick={handleResetGame}
    >
      Reset Game
    </button>
  );
};
