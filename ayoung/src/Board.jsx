import { useState } from "react";
import styled from "styled-components";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(idx) {
    const newSquares = [...squares];
    newSquares[idx] = "X";
    setSquares(newSquares);
  }

  return (
    <>
      <Row>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </Row>
      <Row>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </Row>
      <Row>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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
