import { Board, HistoryList } from "./components";
import { GameProvider } from "./provider/game-provider";

export const Game = () => {
  return (
    <GameProvider>
      <section className="space-y-5">
        <Board />
        <HistoryList />
      </section>
    </GameProvider>
  );
};
``;
