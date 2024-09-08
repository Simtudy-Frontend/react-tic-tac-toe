import { ReactNode } from "react";

import { Container } from "./styles";

interface CellProps {
  children: ReactNode;
  className?: string;
  onCellClick: () => void;
}

export default function Cell(props: CellProps) {
  return (
    <Container className={props.className} onClick={props.onCellClick}>
      {props.children}
    </Container>
  );
}
