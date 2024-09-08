import { useState } from "react";

import BoardState from "./types/board-state";

import Board from "./components/board";
import { Container, Content, NextPlayer, Title } from "./styles";
import BoardHistory from "./components/board-history";

function App() {
  const [history, setHistory] = useState<BoardState[]>([Array(9).fill(null)]);
  const [currentStateIndex, setCurrentStateIndex] = useState<number>(0);
  const isXCurrentPlayer = history.length % 2 === 0;

  const handlePlay = (clickedCellIndex: number) => {
    const newBoardState = history[currentStateIndex].slice();
    newBoardState[clickedCellIndex] = isXCurrentPlayer ? "X" : "O";

    const newHistory = [
      ...history.slice(0, currentStateIndex + 1),
      newBoardState,
    ];
    setHistory(newHistory);

    setCurrentStateIndex(newHistory.length - 1);
  };

  const handleJumpClick = (clickedHistoryIndex: number) => {
    setCurrentStateIndex(clickedHistoryIndex);
  };

  return (
    <Container>
      <Title>🏁 Tic-Tac-Toe 🏁</Title>
      <NextPlayer>{`현재 플레이어: ${
        isXCurrentPlayer ? "X" : "O"
      }`}</NextPlayer>
      <Content>
        <Board currentState={history[currentStateIndex]} onPlay={handlePlay} />
        <BoardHistory history={history} onJumpClick={handleJumpClick} />
      </Content>
    </Container>
  );
}

export default App;
