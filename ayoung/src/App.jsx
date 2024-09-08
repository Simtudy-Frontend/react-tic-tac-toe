import { useState, useEffect } from "react";
import SelectPlayer from "@/components/SelectPlayer";
import Board from "@/components/Board";
import { calcGameStatus, getComputerPosition } from "@/utils/gameUtils";
import styled from "styled-components";

const App = () => {
  const [playerMark, setPlayerMark] = useState("X");
  const [mark, setMark] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const isPlayerTurn = playerMark === mark;
  const gameStatus = calcGameStatus(squares);

  const handlePlayerSelect = (selectedMark) => {
    if (playerMark === selectedMark || gameStatus.started || gameStatus.ended) {
      return;
    }
    setPlayerMark(selectedMark);
  };

  const handleClick = (idx) => {
    if (!isPlayerTurn || squares[idx] || gameStatus.ended) return;
    updateSquares(idx, mark);
  };

  const updateSquares = (idx, currentMark) => {
    const newSquares = [...squares];
    newSquares[idx] = currentMark;
    setSquares(newSquares);
    setMark((prevMark) => (prevMark === "X" ? "O" : "X"));
  };

  useEffect(() => {
    if (isPlayerTurn || gameStatus.ended) return;
    const position = getComputerPosition(squares, mark);
    updateSquares(position, mark);
  }, [isPlayerTurn, mark, squares]);

  const handleReset = () => {
    setSquares(Array(9).fill(null)); // 게임 보드를 초기화
    setMark("X"); // 선공을 X로 초기화
    setPlayerMark("X"); // 플레이어 선택을 X로 초기화
  };

  return (
    <Container>
      <SelectPlayer
        player={playerMark}
        onPlayerSelect={handlePlayerSelect}
        turnMark={gameStatus.ended ? null : mark}
      ></SelectPlayer>
      <Board squares={squares} onBoardClick={handleClick}></Board>
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
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.3;
    background: rgba(214, 228, 229, 0.6);
  }
`;
