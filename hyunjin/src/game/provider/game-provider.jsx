import { createContext, useContext } from "react";
import { calculateWinner } from "../utils";
import { useGameReducer } from "@/stores/game-reducer";

// GameContext 생성
const GameContext = createContext();

// GameProvider 컴포넌트 정의
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useGameReducer();
  const { history, currentMove, player } = state;
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);

  const handlePlay = (nextSquares) => {
    dispatch({ type: "PLAY", nextSquares });
  };

  const jumpTo = (nextMove) => {
    dispatch({ type: "JUMP_TO", nextMove });
  };

  const handleResetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  const setPlayer = (player) => {
    dispatch({ type: "SET_PLAYER", player });
  };

  const computerPlay = () => {
    dispatch({ type: "COMPUTER_PLAYING" });
  };

  return (
    <GameContext.Provider
      value={{
        history,
        currentMove,
        xIsNext,
        currentSquares,
        handlePlay,
        handleResetGame,
        jumpTo,
        setPlayer,
        player,
        computerPlay,
        winner,
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
