import { createContext, useContext } from "react";
import { calculateWinner } from "../utils";
import { useGameReducer } from "@/stores/game-reducer";

// GameContext 생성
const GameContext = createContext();

// GameProvider 컴포넌트 정의
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useGameReducer();
  const { history, currentMove, player, isPending, isError, isSuccess } = state;
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

  const fetchComputerPlay = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const nextSquares = history[currentMove].slice();
        const emptySquares = nextSquares.reduce(
          (acc, square, index) => (!square ? [...acc, index] : acc),
          []
        );
        const randomIndex =
          emptySquares[Math.floor(Math.random() * emptySquares.length)];
        if (randomIndex === undefined) {
          reject(new Error("No empty squares"));
        }
        nextSquares[randomIndex] = player === "X" ? "O" : "X";
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        resolve({
          history: nextHistory,
          currentMove: nextHistory.length - 1,
        });
      }, 2000);
    });
  };

  const computerPlay = async () => {
    dispatch({ type: "PENDING" });
    try {
      dispatch({ type: "SUCCESS", data: await fetchComputerPlay() });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
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
        isPending,
        isError,
        isSuccess,
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
