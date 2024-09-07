import { useState } from "react";
import styled from "styled-components";

const Square = ({ value, onSquareClick }) => {
  return <Button onClick={onSquareClick}>{value}</Button>;
};

export default Square;

const Button = styled.button`
  text-align: center;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 50px;
  background-color: #fff;
  color: #373b44;
  cursor: pointer;
  border: none;
  border-radius: 1px;
  font-size: 25px;
  font-weight: bold;
  outline: 1px solid #85adad;
  vertical-align: middle;

  &:hover {
    background-color: #f0f5f5;
  }
`;
