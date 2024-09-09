import { Board, HistoryList, OverView, SelectPlayer } from "./components";
import { GameProvider } from "./provider/game-provider";

export const Game = () => {
  return (
    <GameProvider>
      <section className="space-y-5 w-1/2 m-auto">
        <OverView />
        <SelectPlayer />
        <Board />
        <HistoryList />
      </section>
    </GameProvider>
  );
};
``;
