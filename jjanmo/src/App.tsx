import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Board from '@/components/Board'
import { BoardData, Player, Position } from '@/types'

const initialData: BoardData = Array.from({ length: 3 }, (_, i) =>
  Array.from({ length: 3 }, (_, j) => ({ row: i, col: j, value: '' }))
)

const App = () => {
  const [boardData, setBoardData] = useState<BoardData>(initialData)
  const [turn, setTurn] = useState<Player>('')
  const myPiece = useRef<Player>('')

  const isFull = boardData
    .flat()
    .map((cell) => cell.value)
    .every(Boolean)

  const getPosition = () => {
    if (isFull) return null

    while (true) {
      const x = Math.floor(Math.random() * 3)
      const y = Math.floor(Math.random() * 3)
      if (!boardData[x][y].value) return { x, y }
    }
  }

  const handleButtonClick = (piece: Player) => () => {
    if (myPiece.current) return

    myPiece.current = piece
    setTurn('X')
  }

  useEffect(() => {
    if (!turn) return
    if (turn !== myPiece.current) {
      const position = getPosition()
      if (!position) return

      const { x, y } = position
      const newBoardData = [...boardData]
      newBoardData[x][y].value = turn
      setBoardData(newBoardData)
      setTurn(myPiece.current)
    }
  }, [turn])

  const updateBoard = (position: Position) => {
    const newBoardData = [...boardData]
    newBoardData[position.x][position.y].value = turn
    setBoardData(newBoardData)
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  return (
    <Container>
      <ButtonContainer>
        <Button
          onClick={handleButtonClick('X')}
          selected={myPiece.current === 'X'}
        >
          X
        </Button>
        <Button
          onClick={handleButtonClick('O')}
          selected={myPiece.current === 'O'}
        >
          O
        </Button>
      </ButtonContainer>
      <Board
        data={boardData}
        updateBoard={updateBoard}
        myPiece={myPiece.current}
      />
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
