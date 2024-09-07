import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Board from '@/components/Board'
import { BoardData, Player, Position } from '@/types'
import { getPosition } from '@/utils'
import useWinner from '@/hooks/useWinner'
import { initialBoardData } from '@/constants'
import SelectPlayerButtons from './components/SelectPlayerButtons'

const App = () => {
  const [boardData, setBoardData] = useState<BoardData>(initialBoardData)
  const [turn, setTurn] = useState<Player>('')

  const myPiece = useRef<Player>('')

  const { winner } = useWinner(boardData)

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

  const updateTurn = useCallback((initialTurn?: Player) => {
    if (!turn && initialTurn) myPiece.current = initialTurn
    setTurn((prev) => (prev === 'X' ? 'O' : 'X'))
  }, [])

  return (
    <Container>
      <SelectPlayerButtons updateTurn={updateTurn} />
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
