import { ReactNode } from "react";

import { Container } from "./styles";

interface CellProps {
  children: ReactNode;
  className?: string;
}

export default function Cell(props: CellProps) {
  return <Container className={props.className}>{props.children}</Container>;
}
