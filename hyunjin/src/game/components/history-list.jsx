const History = ({ move, jumpTo }) => {
  const description = move > 0 ? `Go to move #${move}` : "Go to game start";
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
};

export const HistoryList = ({ data, jumpTo }) => {
  return (
    <div className="ml-5">
      <ol>
        {data.map((squares, move) => (
          <History key={move} move={move} jumpTo={jumpTo} />
        ))}
      </ol>
    </div>
  );
};
