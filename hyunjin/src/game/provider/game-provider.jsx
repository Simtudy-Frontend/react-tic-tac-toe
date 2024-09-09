import { useReducer, createContext, useContext } from "react";
import { calculateWinner } from "../utils";

// 초기 상태 정의
const initialState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
  player: "X", // 기본 플레이어를 X로 설정
};

// 리듀서 함수 정의
const gameReducer = (state, action) => {
  switch (action.type) {
    case "PLAY": {
      const nextHistory = [
        ...state.history.slice(0, state.currentMove + 1),
        action.nextSquares,
      ];
      return {
        ...state,
        history: nextHistory,
        currentMove: nextHistory.length - 1,
      };
    }
    case "JUMP_TO":
      return {
        ...state,
        currentMove: action.nextMove,
      };
    case "RESET_GAME":
      return {
        ...initialState,
      };
    case "SET_PLAYER":
      return {
        ...state,
        player: action.player,
      };
    case "COMPUTER_PLAYING": {
      const emptySquares = state.history[state.currentMove]
        .map((square, index) => (square === null ? index : null))
        .filter((index) => index !== null);
      const randomIndex =
        emptySquares[Math.floor(Math.random() * emptySquares.length)];
      const nextSquares = state.history[state.currentMove].slice();
      nextSquares[randomIndex] = state.player === "X" ? "O" : "X";
      const nextHistory = [
        ...state.history.slice(0, state.currentMove + 1),
        nextSquares,
      ];
      return {
        ...state,
        history: nextHistory,
        currentMove: nextHistory.length - 1,
      };
    }
    default:
      return state;
  }
};

// GameContext 생성
const GameContext = createContext();

// GameProvider 컴포넌트 정의
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
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
