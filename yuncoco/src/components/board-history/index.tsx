import BoardState from "../../types/board-state";

import { Container, JumpButton, List, Title } from "./styles";

interface BoardHistoryProps {
  history: BoardState[];
  onJumpClick: (index: number) => void;
}

export default function BoardHistory(props: BoardHistoryProps) {
  return (
    <Container>
      <Title>[History]</Title>
      <List>
        {props.history.map((item, index) => (
          <li key={index}>
            <JumpButton onClick={() => props.onJumpClick(index)}>
              {index === 0
                ? `처음으로 돌아가기`
                : `${index + 1}번째로 돌아가기`}
            </JumpButton>
          </li>
        ))}
      </List>
    </Container>
  );
}
