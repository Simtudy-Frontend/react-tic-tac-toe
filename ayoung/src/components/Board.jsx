import { useState, useEffect } from "react";
import styled from "styled-components";
import Square from "@/components/Square";

const Board = ({ squares, onBoardClick }) => {
  return (
    <>
      <Row>
        <Square value={squares[0]} onSquareClick={() => onBoardClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onBoardClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onBoardClick(2)} />
      </Row>
      <Row>
        <Square value={squares[3]} onSquareClick={() => onBoardClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onBoardClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onBoardClick(5)} />
      </Row>
      <Row>
        <Square value={squares[6]} onSquareClick={() => onBoardClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onBoardClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onBoardClick(8)} />
      </Row>
    </>
  );
};

export default Board;

const Row = styled.div`
  margin: 0;
  padding: 0;
  height: 50px;
`;
