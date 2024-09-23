import styled from "styled-components";

import color from "../../../shared/styles/color";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border: 1px solid ${color.black};
  cursor: pointer;
  font-size: 5rem;
`;
