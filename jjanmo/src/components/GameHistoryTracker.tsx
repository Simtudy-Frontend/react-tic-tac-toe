import useGameHistory from '@/hooks/useGameHistory'
import { BoardData, Player } from '@/types'
import styled from 'styled-components'

interface Props {
  boardData: BoardData
  turn: Player
}

const GameHistoryTracker = ({ boardData, turn }: Props) => {
  const { gameHistory } = useGameHistory({ boardData, turn })

  return (
    <Container>
      <Title>게임 히스토리</Title>
      {gameHistory.map((historySnapshot, index) => (
        <button key={index}>게임 스냅샵 #{index + 1}</button>
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
