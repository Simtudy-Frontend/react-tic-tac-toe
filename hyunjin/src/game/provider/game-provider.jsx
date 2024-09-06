import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  return (
    <GameContext.Provider
      value={{
        history,
        currentMove,
        xIsNext,
        currentSquares,
        handlePlay,
        jumpTo,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// useGameContext 훅 정의
export const useGameContext = () => {
  return useContext(GameContext);
};
