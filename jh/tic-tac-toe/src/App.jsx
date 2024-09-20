import React, { useState } from "react";
import "./App.css";
import Square from "./selection-board.jsx";
import GameBoard from "./game-board.jsx";

function App() {
  const [selectedCharactor, setSelectedCharactor] = useState("");

  return (
    <>
      <div>
        {selectedCharactor ? (
          <GameBoard charactor={selectedCharactor} />
        ) : (
          <Square onSelected={setSelectedCharactor} />
        )}
      </div>
    </>
  );
}

export default App;
