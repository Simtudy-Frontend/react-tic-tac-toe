import { configureStore, createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    player1Character: null,
    player2Character: null,
    currentPlayer: 1,
  },
  reducers: {
    setPlayerCharacter: (state, action) => {
      const { player, character } = action.payload;
      if (player === 1) {
        state.player1Character = character;
      } else if (player === 2) {
        state.player2Character = character;
      }
    },
    switchPlayer: (state) => {
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
    },
  },
});

export const { setPlayerCharacter, switchPlayer } = gameSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});
