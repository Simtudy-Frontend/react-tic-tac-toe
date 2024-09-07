import styled from "styled-components";
import Board from "./Board";

const App = () => {
  return (
    <Container>
      <Board></Board>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
