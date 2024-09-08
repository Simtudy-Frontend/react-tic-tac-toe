import BoardState from "../../types/board-state";

import { Container, JumpButton, List, Title } from "./styles";

interface BoardHistoryProps {
  history: BoardState[];
}

export default function BoardHistory(props: BoardHistoryProps) {
  const handleClick = () => {};

  return (
    <Container>
      <Title>[History]</Title>
      <List>
        {props.history.map((item, index) => (
          <li key={index}>
            <JumpButton onClick={handleClick}>
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
