import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Board from '@/components/Board'
import { BoardData, Player, Position } from '@/types'
import { getPosition } from '@/utils'
import useWinner from '@/hooks/useWinner'

const initialData: BoardData = Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, j) => ({ row: i, col: j, value: '' })))

const App = () => {
  const [boardData, setBoardData] = useState<BoardData>(initialData)
  const [turn, setTurn] = useState<Player>('')

  const myPiece = useRef<Player>('')

  const { winner } = useWinner(boardData)

  const handleButtonClick = (piece: Player) => () => {
    if (myPiece.current) return

    myPiece.current = piece
    setTurn('X')
  }

  useEffect(() => {
    if (!turn) return
    if (turn !== myPiece.current) {
      const position = getPosition(boardData)
      if (!position) return

      updateBoard(position)
    }
  }, [turn])

  const updateBoard = (position: Position) => {
    const { x, y } = position
    const newBoardData = [...boardData]
    newBoardData[x][y].value = turn
    setBoardData(newBoardData)

    if (!winner) setTurn(turn === 'X' ? 'O' : 'X')
  }

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleButtonClick('X')} selected={myPiece.current === 'X'}>
          X
        </Button>
        <Button onClick={handleButtonClick('O')} selected={myPiece.current === 'O'}>
          O
        </Button>
      </ButtonContainer>
      
      <>
        {!winner && turn && <Turn>{turn} 차례</Turn>}
        {winner === 'draw' && <Result>무승부입니다.</Result>}
        {winner && winner !== 'draw' && <Result>승자는 {winner} 입니다.</Result>}
      </>

      <Board data={boardData} updateBoard={updateBoard} myPiece={myPiece.current} />
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonContainer = styled.div`
  width: 100%;
  margin: 10px 16px;
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
const Turn = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
const Result = styled.div`
  width: 300px;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 600;
  color: #e74c3c;
  text-align: center;
`
