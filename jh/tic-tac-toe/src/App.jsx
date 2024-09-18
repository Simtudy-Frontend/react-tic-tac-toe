import React, { useState } from "react";
import "./App.css";
import Square from "./selection-board.jsx";
import GameBoard from "./game-board.jsx";

function App() {
  const [selectedCharactor, setSelectedCharactor] = useState("");
  console.log("app", setSelectedCharactor);

  return (
    <>
      <div>
        {selectedCharactor ? (
          <GameBoard />
        ) : (
          <Square onSelected={setSelectedCharactor} />
        )}
      </div>
    </>
  );
}

export default App;
