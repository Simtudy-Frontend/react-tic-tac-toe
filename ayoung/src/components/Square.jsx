import { useState } from "react";
import styled from "styled-components";

const Square = ({ value, onSquareClick }) => {
  return <Button onClick={onSquareClick}>{value}</Button>;
};

export default Square;

const Button = styled.button`
  text-align: center;
  background-color: #fff;
  color: #373b44;
  cursor: pointer;
  border: none;
  border-radius: 1px;
  font-size: 8vw;
  font-weight: bold;
  outline: 1px solid #85adad;
  vertical-align: middle;
  aspect-ratio: 1 / 1; /* 정사각형을 유지 */

  &:hover {
    background-color: #f0f5f5;
  }
`;
