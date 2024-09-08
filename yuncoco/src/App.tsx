import { useState } from "react";

import BoardState from "./types/board-state";

import Board from "./components/board";
import { Container, Content, Title } from "./styles";
import BoardHistory from "./components/board-history";

function App() {
  const [history, setHistoroy] = useState<BoardState[]>([Array(9).fill(null)]);
  const [currentStateIndex, setCurrentStateIndex] = useState<number>(0);

  return (
    <Container>
      <Title>🏁 Tic-Tac-Toe 🏁</Title>
      <Content>
        <Board currentState={history[currentStateIndex]} />
        <BoardHistory history={history} />
      </Content>
    </Container>
  );
}

export default App;
