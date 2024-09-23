import { configureStore, createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = {
  history: [Array(9).fill(null)],
  stepNumber: 0,
  isXNext: true,
};

// 슬라이스 생성
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playTurn: (state, action) => {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.slice();

      if (calculateWinner(squares) || squares[action.payload]) {
        return;
      }

      squares[action.payload] = state.isXNext ? "X" : "O";
      state.history = [...history, squares];
      state.stepNumber = history.length;
      state.isXNext = !state.isXNext;
    },
    jumpTo: (state, action) => {
      state.stepNumber = action.payload;
      state.isXNext = action.payload % 2 === 0;
    },
  },
});

export const { playTurn, jumpTo } = gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
