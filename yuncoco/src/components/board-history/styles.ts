import styled from "styled-components";

import color from "../../shared/styles/color";

export const Container = styled.div``;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > li {
    font-size: 2rem;
  }
`;

export const JumpButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${color.orange200};

  &:hover {
    background-color: ${color.orange400};
  }
`;
