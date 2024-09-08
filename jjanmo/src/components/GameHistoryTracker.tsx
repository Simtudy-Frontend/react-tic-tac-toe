import styled from 'styled-components'
import { GameHistroySnapshot, Player } from '@/types'

interface Props {
  myPiece: Player
  gameHistory: GameHistroySnapshot[]
  rewindBoardToSnapshot: (snapshot: GameHistroySnapshot[]) => void
}

const GameHistoryTracker = ({ myPiece, gameHistory, rewindBoardToSnapshot }: Props) => {
  const handleSnapshotClick = (index: number) => () => {
    const newGameHistory = gameHistory.slice(0, index + 1)
    rewindBoardToSnapshot(newGameHistory)
  }

  return (
    <Container>
      <Title>게임 히스토리</Title>
      {gameHistory.map((gameHistorySnapshot, index) => (
        <Button key={index} onClick={handleSnapshotClick(index)} disabled={myPiece === gameHistorySnapshot.player}>
          게임 스냅샵 #{index + 1} {gameHistorySnapshot.player} {gameHistorySnapshot.winner}
        </Button>
      ))}
    </Container>
  )
}

export default GameHistoryTracker

const Container = styled.div`
  width: 100%;
  min-height: 360px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const Title = styled.h1`
  margin-bottom: 10px;
`
const Button = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  color: white;
  background-color: #74b9ff;
  border: 1px solid #2e86de;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0984e3;
  }

  & + & {
    margin-top: 5px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
