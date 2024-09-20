import React from "react";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import SelectionPage from "./selection-board.jsx";
import GamePage from "./game-board.jsx";
import { store } from "./store.js";

function AppContent() {
  const player1Character = useSelector((state) => state.game.player1Character);
  const player2Character = useSelector((state) => state.game.player2Character);

  return (
    <div>
      {player1Character && player2Character ? <GamePage /> : <SelectionPage />}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
