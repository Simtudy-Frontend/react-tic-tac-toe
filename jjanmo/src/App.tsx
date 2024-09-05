import Board from '@/components/Board'
import { BoardData, Player } from './types'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const boardData: BoardData = Array.from({ length: 3 }, (_, i) =>
  Array.from({ length: 3 }, (_, j) => ({ row: i, col: j, value: '' }))
)

const App = () => {
  const [myPiece, setMyPiece] = useState<Player>('')

  const handleClick = (piece: Player) => () => {
    if (myPiece) return
    setMyPiece(piece)
  }

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleClick('X')} selected={myPiece === 'X'}>
          X
        </Button>
        <Button onClick={handleClick('O')} selected={myPiece === 'O'}>
          O
        </Button>
      </ButtonContainer>
      <Board data={boardData} />
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonContainer = styled.div`
  width: 100%;
  margin: 16px;
  display: flex;
  justify-content: center;
`
const Button = styled.button<{ selected: boolean }>`
  padding: 8px 24px;
  margin: 6px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  opacity: 0.8;
  font-size: 24px;
  background-color: ${({ selected }) => (selected ? '#3498db' : '#7f8c8d')};
  color: white;
`
