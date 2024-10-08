import styled from "styled-components";

const SelectPlayer = ({ player, onPlayerSelect, turnMark }) => {
  return (
    <SelectContainer>
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
    </SelectContainer>
  );
};

export default SelectPlayer;

const SelectContainer = styled.div`
  width: 50%;
  max-width: 300px;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.5em;
`;

const PlayerButton = styled.div`
  width: 50%;
  margin-bottom: 2px;
  background-color: ${(props) => (props.$isSelected ? "#D6E4E5" : "#f1f1f1")};
  color: ${(props) => (props.$isSelected ? "black" : "gray")};
  border: 2px solid ${(props) => (props.$isTurn ? "gold" : "white")};
  border-radius: 3px;
  cursor: pointer;
  text-align: center; /* 수평 가운데 정렬 */
  transition: all 0.9s ease;
`;
