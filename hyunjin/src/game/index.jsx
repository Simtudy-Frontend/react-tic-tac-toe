import { Board, HistoryList, ResetButton } from "./components";
import { GameProvider } from "./provider/game-provider";

export const Game = () => {
  return (
    <GameProvider>
      <div className="flex">
        <Board />
        <HistoryList />
      </div>

      <ResetButton />
    </GameProvider>
  );
};
``;
