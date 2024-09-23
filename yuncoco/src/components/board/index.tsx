import BoardState from "../../types/board-state";

import Cell from "./cell";

import { CellGroup, Container, Title } from "./styles";

interface BoardProps {
  currentState: BoardState;
  onPlay: (clickedCellIndex: number) => void;
}

export default function Board(props: BoardProps) {
  console.log("currentState", props.currentState);
  return (
    <Container>
      <Title>[Board]</Title>
      <CellGroup>
        {props.currentState.map((item, index) => (
          <Cell key={index} onCellClick={() => props.onPlay(index)}>
            {item}
          </Cell>
        ))}
      </CellGroup>
    </Container>
  );
}
