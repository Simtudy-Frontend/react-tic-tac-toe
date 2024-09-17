import { useGameContext } from "../provider/game-provider";

const History = ({ move }) => {
  const { jumpTo } = useGameContext();

  const buttonColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-pink-500",
    "bg-gray-500",
    "bg-red-700",
    "bg-blue-700",
  ];

  const description = move > 0 ? `Go to move #${move}` : "Go to game start";

  return (
    <li className="">
      <button
        className={`ml-2 px-3 py-1 ${buttonColors[move]} text-white rounded hover:bg-opacity-75 transition duration-300`}
        onClick={() => jumpTo(move)}
      >
        {description}
      </button>
    </li>
  );
};

export const HistoryList = () => {
  const { history } = useGameContext();

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md ">
      <ol className="list-decimal pl-5 space-y-2">
        {history.map((_squares, move) => (
          <History key={move} move={move} />
        ))}
      </ol>
    </div>
  );
};
