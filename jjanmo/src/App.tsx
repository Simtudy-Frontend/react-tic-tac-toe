import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Board from '@/components/Board'
import SelectPlayerButtons from '@/components/SelectPlayerButtons'
import GameStatus from '@/components/GameStatus'
import GameHistoryTracker from '@/components/GameHistoryTracker'

import useWinner from '@/hooks/useWinner'
import { getPosition } from '@/utils'
import { BoardData, CellData, GameHistroySnapshot, Player, Position, RowData, Winner } from '@/types'
import { initialBoardData } from '@/constants'

const App = () => {
  const [boardData, setBoardData] = useState<BoardData>(initialBoardData)
  const [turn, setTurn] = useState<Player>('')
  const [winner, setWinner] = useState<Winner>('')
  const [gameHistory, setGameHistory] = useState<GameHistroySnapshot[]>([])

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

    const nextTurn = turn === 'X' ? 'O' : 'X'
    const winner = checkWinner(newBoardData)
    if (winner) setWinner(winner)
    else setTurn(nextTurn)

    updateGameHistory({
      boardData: newBoardData,
      player: turn, // currnet player, 보드를 마지막에 업데이트한 사람
      winner,
    })
  }

  const updateTurn = useCallback((selectedPlayer?: Player) => {
    if (!turn && selectedPlayer) myPiece.current = selectedPlayer
    setTurn((prev) => (prev === 'X' ? 'O' : 'X'))
  }, [])

  const updateGameHistory = (currentSnapshot: GameHistroySnapshot) => {
    const { boardData, player, winner } = currentSnapshot
    const newGameSnapshot = {
      boardData: boardData.map<RowData>((row) => row.map<CellData>((cell) => ({ ...cell }))),
      player,
      winner,
    }

    setGameHistory([...gameHistory, newGameSnapshot])
  }

  const rewindBoardToSnapshot = (gameHistory: GameHistroySnapshot[]) => {
    setGameHistory(gameHistory)

    const lastGameSnapshot = gameHistory.at(-1)
    if (lastGameSnapshot) {
      const { boardData, player, winner } = lastGameSnapshot
      const nextPlayer = player === 'X' ? 'O' : 'X'
      setBoardData(boardData)
      setTurn(nextPlayer)
      setWinner(winner)
    }
  }

  return (
    <Container>
      <Section>
        <SelectPlayerButtons updateTurn={updateTurn} />
        <GameStatus turn={turn} winner={winner} />

        <Board boardData={boardData} myPiece={myPiece.current} winner={winner} updateBoard={updateBoard} />
      </Section>
      <Section>
        <GameHistoryTracker
          gameHistory={gameHistory}
          rewindBoardToSnapshot={rewindBoardToSnapshot}
          myPiece={myPiece.current}
        />
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
