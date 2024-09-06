import { useGameContext } from "../provider/game-provider";

const History = ({ move }) => {
  const { jumpTo } = useGameContext();

  const description = move > 0 ? `Go to move #${move}` : "Go to game start";
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
};

export const HistoryList = () => {
  const { jumpTo, history } = useGameContext();

  return (
    <div className="ml-5">
      <ol>
        {history.map((_squares, move) => (
          <History key={move} move={move} jumpTo={jumpTo} />
        ))}
      </ol>
    </div>
  );
};
