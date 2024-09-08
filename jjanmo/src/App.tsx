import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Board from '@/components/Board'
import SelectPlayerButtons from '@/components/SelectPlayerButtons'
import GameStatus from '@/components/GameStatus'
import GameHistoryTracker from '@/components/GameHistoryTracker'

import useWinner from '@/hooks/useWinner'
import { getPosition } from '@/utils'
import { BoardData, GameHistroySnapshot, Player, Position, Winner } from '@/types'
import { initialBoardData } from '@/constants'

const App = () => {
  const [boardData, setBoardData] = useState<BoardData>(initialBoardData)
  const [turn, setTurn] = useState<Player>('')
  const [winner, setWinner] = useState<Winner>('')

  const myPiece = useRef<Player>('')

  const { checkWinner } = useWinner()

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

    const winner = checkWinner(newBoardData)
    winner ? setWinner(winner) : setTurn(turn === 'X' ? 'O' : 'X')
  }

  const updateTurn = useCallback((selectedPlayer?: Player) => {
    if (!turn && selectedPlayer) myPiece.current = selectedPlayer
    setTurn((prev) => (prev === 'X' ? 'O' : 'X'))
  }, [])

  const updateHistory = (snapshot: GameHistroySnapshot) => {
    const { boardData, player } = snapshot
    setBoardData(boardData)
    setTurn(player)
  }

  return (
    <Container>
      <Section>
        <SelectPlayerButtons updateTurn={updateTurn} />
        <GameStatus turn={turn} winner={winner} />

        <Board boardData={boardData} updateBoard={updateBoard} myPiece={myPiece.current} winner={winner} />
      </Section>
      <Section>
        <GameHistoryTracker boardData={boardData} turn={turn} updateHistory={updateHistory} />
      </Section>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
