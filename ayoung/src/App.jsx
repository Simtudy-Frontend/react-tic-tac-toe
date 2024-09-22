import { useState, useEffect } from "react";
import SelectPlayer from "@/components/SelectPlayer";
import Board from "@/components/Board";
import GameStatus from "@/components/GameStatus";
import { calcWinner, getComputerPosition } from "@/utils/gameUtils";
import styled from "styled-components";

const App = () => {
  const [playerMark, setPlayerMark] = useState("X");
  const [mark, setMark] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turnCount, setTurnCount] = useState(0);

  const isPlayerTurn = playerMark === mark;
  const winner = calcWinner(squares);
  const isGameStarted = 0 < turnCount;
  const isGameEnded = winner.winner || turnCount >= 9;

  const handlePlayerSelect = (selectedMark) => {
    if (playerMark === selectedMark || isGameStarted || isGameEnded) {
      return;
    }
    setPlayerMark(selectedMark);
  };

  const handleClick = (idx) => {
    if (!isPlayerTurn || isGameEnded) return;
    updateSquares(idx, mark);
  };

  const updateSquares = (idx, currentMark) => {
    if (squares[idx]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[idx] = currentMark;
    setTurnCount((prev) => prev + 1);
    setSquares(newSquares);
    setMark((prevMark) => (prevMark === "X" ? "O" : "X"));
  };

  useEffect(() => {
    if (isPlayerTurn || isGameEnded) return;
    const position = getComputerPosition(squares, mark);
    if (position === null) {
      return;
    }

    const timer = setTimeout(() => {
      updateSquares(position, mark);
    }, 700);
    return () => clearTimeout(timer);
  }, [isPlayerTurn, mark]);

  const handleReset = () => {
    setSquares(Array(9).fill(null)); // 게임 보드를 초기화
    setMark("X"); // 선공을 X로 초기화
    setPlayerMark("X"); // 플레이어 선택을 X로 초기화
    setTurnCount(0); // 플레이 턴 카운트 초기화
  };

  return (
    <Container>
      <GameStatus
        winner={winner.winner}
        turnCount={turnCount}
        playerMark={playerMark}
        isPlayerTurn={isPlayerTurn}
      ></GameStatus>
      <SelectPlayer
        player={playerMark}
        onPlayerSelect={handlePlayerSelect}
        turnMark={isGameEnded ? null : mark}
      ></SelectPlayer>
      <Board
        squares={squares}
        onClick={handleClick}
        winningLine={winner.line}
      ></Board>
      <RestartButton onClick={handleReset}>게임 다시 시작하기</RestartButton>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RestartButton = styled.button`
  margin-top: 5px;
  width: 50%;
  max-width: 300px;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.3;
    background: rgba(214, 228, 229, 0.6);
  }
`;
