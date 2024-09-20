import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchPlayer } from "./store";

function CharacterSelectionStatus() {
  const player1Character = useSelector((state) => state.game.player1Character);
  const player2Character = useSelector((state) => state.game.player2Character);

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: "#f5f5f5",
        maxWidth: "300px",
        margin: "0 auto",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Character Selection</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "5px",
            backgroundColor: "white",
          }}
        >
          <p style={{ fontSize: "14px", margin: "0 0 5px 0" }}>Player 1</p>
          <img
            src={player1Character.image}
            alt="Player 1"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "5px",
            backgroundColor: "white",
          }}
        >
          <p style={{ fontSize: "14px", margin: "0 0 5px 0" }}>Player 2</p>
          <img
            src={player2Character.image}
            alt="Player 2"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function GamePage() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const player1Character = useSelector((state) => state.game.player1Character);
  const player2Character = useSelector((state) => state.game.player2Character);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const dispatch = useDispatch();

  const handleCellClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] =
        currentPlayer === 1 ? player1Character : player2Character;
      setBoard(newBoard);
      dispatch(switchPlayer());
    }
  };

  return (
    <>
      <CharacterSelectionStatus />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          maxWidth: "300px",
          margin: "20px auto",
        }}
      >
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {cell && (
              <img
                src={cell.image}
                alt={`Player ${cell === player1Character ? "1" : "2"}`}
                style={{ width: "80px", height: "80px" }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
