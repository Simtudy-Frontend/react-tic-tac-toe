import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';


function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default App;
