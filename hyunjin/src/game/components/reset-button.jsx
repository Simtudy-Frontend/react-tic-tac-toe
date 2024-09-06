import { useGameContext } from "../provider/game-provider";

export const ResetButton = () => {
  const { handleResetGame } = useGameContext();

  return (
    <button className="mt-5" onClick={handleResetGame}>
      Reset Game
    </button>
  );
};
