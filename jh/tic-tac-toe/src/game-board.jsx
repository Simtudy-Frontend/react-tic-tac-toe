import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchPlayer } from "./store";
import "./game-board.css";

function CharacterSelectionStatus() {
  const player1Character = useSelector((state) => state.game.player1Character);
  const player2Character = useSelector((state) => state.game.player2Character);

  return (
    <div className="character-selection-status">
      <div className="character-selection-container">
        <div className="character-box">
          <p>Player 1</p>
          <img
            src={player1Character.image}
            alt="Player 1"
            className="character-image"
          />
        </div>
        <div className="character-box">
          <p>Player 2</p>
          <img
            src={player2Character.image}
            alt="Player 2"
            className="character-image"
          />
        </div>
      </div>
    </div>
  );
}

export default function GamePage() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [showResult, setShowResult] = useState(false);
  const player1Character = useSelector((state) => state.game.player1Character);
  const player2Character = useSelector((state) => state.game.player2Character);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const dispatch = useDispatch();

  const handleCellClick = (index) => {
    if (board[index] === null && !showResult) {
      const newBoard = [...board];
      newBoard[index] =
        currentPlayer === 1 ? player1Character : player2Character;
      setBoard(newBoard);
      dispatch(switchPlayer());
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    dispatch(switchPlayer(1)); // Reset to player 1
    setShowResult(false);
  };

  const checkWinner = () => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] === player1Character ? "Player 1" : "Player 2";
      }
    }
    return null;
  };

  const winner = checkWinner();
  const isBoardFull = board.every((cell) => cell !== null);

  React.useEffect(() => {
    if (winner || isBoardFull) {
      setShowResult(true);
    }
  }, [winner, isBoardFull]);

  return (
    <>
      <CharacterSelectionStatus />
      <div className="game-board">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className="game-cell"
          >
            {cell ? (
              <img
                src={cell.image}
                alt={`Player ${cell === player1Character ? "1" : "2"}`}
                className="player-image"
              />
            ) : (
              <div className="empty-cell"></div>
            )}
          </div>
        ))}
      </div>
      {showResult && (
        <div className="result-overlay">
          <div className="result-content">
            {winner ? (
              <p>{winner} wins!</p>
            ) : isBoardFull ? (
              <p>It's a draw!</p>
            ) : (
              <p>Current player: Player {currentPlayer}</p>
            )}
            <button onClick={handleReset} className="reset-button">
              Play Again
            </button>
          </div>
        </div>
      )}
      {!showResult && <p>Current player: Player {currentPlayer}</p>}
    </>
  );
}
