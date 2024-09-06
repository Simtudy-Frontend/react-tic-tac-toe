import { useReducer, createContext, useContext } from "react";

// 초기 상태 정의
const initialState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
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
    default:
      return state;
  }
};

// GameContext 생성
const GameContext = createContext();

// GameProvider 컴포넌트 정의
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { history, currentMove } = state;
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    dispatch({ type: "PLAY", nextSquares });
  };

  const jumpTo = (nextMove) => {
    dispatch({ type: "JUMP_TO", nextMove });
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
