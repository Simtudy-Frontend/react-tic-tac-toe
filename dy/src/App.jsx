import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jumpTo } from './store';
import './App.css';
import Board from './components/Board';
import SelectHistory from './components/SelectHistory';

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div>
        <SelectHistory/>
      </div>
    </div>
  );
}

export default App;
