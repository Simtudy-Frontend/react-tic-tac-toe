import { useReducer } from "react";

// 초기 상태 정의
const initialState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
  player: "X", // 기본 플레이어를 X로 설정
  isPending: false,
  isError: false,
  isSuccess: false,
};

// 리듀서 함수 정의
const gameReducer = (state, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        isPending: true,
        isError: false,
        isSuccess: false,
      };
    case "SUCCESS":
      return {
        ...state,
        isPending: false,
        isError: false,
        isSuccess: true,
        ...action.data,
      };
    case "ERROR":
      return {
        ...state,
        isPending: false,
        isError: true,
        isSuccess: false,
      };
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
   
    default:
      return state;
  }
};

export const useGameReducer = () => useReducer(gameReducer, initialState);
