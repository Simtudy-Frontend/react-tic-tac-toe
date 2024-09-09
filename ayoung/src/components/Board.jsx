import { useState, useEffect } from "react";
import styled from "styled-components";
import Square from "@/components/Square";

const Board = ({ squares, onBoardClick, winningLine }) => {
  return (
    <BoardContainer>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onSquareClick={() => onBoardClick(index)}
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
  gap: 0; /* 셀 간의 간격 */
  max-width: 300px;
`;
