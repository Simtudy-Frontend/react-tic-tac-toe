import { useReducer } from "react";

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

export const useGameReducer = () => useReducer(gameReducer, initialState);