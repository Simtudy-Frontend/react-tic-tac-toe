import { Board, HistoryList } from "./components";
import { GameProvider } from "./provider/game-provider";

export const Game = () => {
  return (
    <GameProvider>
      <section className="flex flex-row">
        <Board />
        <HistoryList />
      </section>
    </GameProvider>
  );
};
