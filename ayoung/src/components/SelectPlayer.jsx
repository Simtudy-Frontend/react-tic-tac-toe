import styled from "styled-components";

const SelectPlayer = ({ player, onPlayerSelect, turnMark }) => {
  return (
    <Container>
      <PlayerButton
        onClick={() => onPlayerSelect("X")}
        $isSelected={player === "X"}
        $isTurn={turnMark === "X"}
      >
        X
      </PlayerButton>
      <PlayerButton
        onClick={() => onPlayerSelect("O")}
        $isSelected={player === "O"}
        $isTurn={turnMark === "O"}
      >
        O
      </PlayerButton>
    </Container>
  );
};

export default SelectPlayer;

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const PlayerButton = styled.div`
  width: 50%;
  margin: 3px;
  background-color: ${(props) => (props.$isSelected ? "#D6E4E5" : "#f1f1f1")};
  color: ${(props) => (props.$isSelected ? "black" : "black")};
  border: 2px solid ${(props) => (props.$isTurn ? "gold" : "white")};
  border-radius: 3px;
  cursor: pointer;
  text-align: center; /* 수평 가운데 정렬 */
`;
