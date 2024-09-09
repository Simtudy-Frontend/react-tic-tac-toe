import { useState } from "react";
import styled from "styled-components";

const Square = ({ value, onSquareClick, isWinningLine }) => {
  return (
    <Button onClick={onSquareClick} $highlight={isWinningLine}>
      {value}
    </Button>
  );
};

export default Square;

const Button = styled.button`
  text-align: center;
  color: #373b44;
  cursor: pointer;
  border: none;
  border-radius: 1px;
  font-size: clamp(10px, 8vw, 50px);
  font-weight: bold;
  outline: 1px solid #85adad;
  vertical-align: middle;
  aspect-ratio: 1 / 1; /* 정사각형을 유지 */
  background-color: ${(props) => (props.$highlight ? "#73ABAF" : "#fff")};
  transition: all 0.5s ease;
  &:hover {
    background-color: #f0f5f5;
  }
`;
