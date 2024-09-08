import styled from "styled-components";

const GameStatus = ({ winner, turnCount, playerMark, isPlayerTurn }) => {
  let message = "";
  if (winner) {
    message = winner === playerMark ? "플레이어 승!" : "컴퓨터 승!";
  } else if (turnCount >= 9) {
    message = "무승부";
  } else if (turnCount == 0) {
    message = "게임 시작 또는 플레이어 선택";
  } else {
    message = isPlayerTurn
      ? `#${turnCount} 당신의 턴입니다.`
      : `#${turnCount} 컴퓨터의 턴입니다.`;
  }
  return <MessageBox>{message}</MessageBox>;
};

export default GameStatus;

const MessageBox = styled.div`
  margin-bottom: 10px;
`;
