import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Square from "@/components/Square";

const Board = ({ squares, onClick, winningLine }) => {
  const handleSquareClick = useCallback(
    (index) => {
      return () => onClick(index);
    },
    [onClick]
  );

  return (
    <BoardContainer>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={handleSquareClick(index)}
          isWinningLine={winningLine ? winningLine.includes(index) : false}
        />
      ))}
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3등분 */
  grid-template-rows: repeat(3, 1fr); /* 3등분 */
  max-width: 300px;
`;
