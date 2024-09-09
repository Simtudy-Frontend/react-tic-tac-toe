import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Board from '@/components/Board'
import SelectPlayerButtons from '@/components/SelectPlayerButtons'
import GameStatus from '@/components/GameStatus'
import GameHistoryTracker from '@/components/GameHistoryTracker'
import ResetButton from '@/components/ResetButton'

import useWinner from '@/hooks/useWinner'
import { getPosition } from '@/utils'
import { BoardData, CellData, GameHistroySnapshot, Player, Position, RowData, Winner } from '@/types'
import { getInitialBoardData } from '@/constants'

const App = () => {
  const [boardData, setBoardData] = useState<BoardData>(getInitialBoardData())
  const [turn, setTurn] = useState<Player>('')
  const [winner, setWinner] = useState<Winner>('')
  const [gameHistory, setGameHistory] = useState<GameHistroySnapshot[]>([])
  const [myPiece, setMyPiece] = useState<Player>('')

  const { checkWinner } = useWinner()

  useEffect(() => {
    if (!turn) return
    if (turn !== myPiece) {
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

  const updateTurn = (selectedPlayer?: Player) => {
    if (!turn && selectedPlayer) setMyPiece(selectedPlayer)
    setTurn((prev) => (prev === 'X' ? 'O' : 'X'))
  }

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
      setBoardData(boardData.map<RowData>((row) => row.map<CellData>((cell) => ({ ...cell }))))
      setTurn(nextPlayer)
      setWinner(winner)
    }
  }

  const resetGame = () => {
    setBoardData(getInitialBoardData())
    setTurn('')
    setWinner('')
    setMyPiece('')
    setGameHistory([])
  }

  return (
    <Container>
      <Section>
        <SelectPlayerButtons updateTurn={updateTurn} myPiece={myPiece} />
        <GameStatus turn={turn} winner={winner} />
        <Board boardData={boardData} myPiece={myPiece} winner={winner} updateBoard={updateBoard} />
        {turn && <ResetButton resetGame={resetGame} />}
      </Section>
      <Section>
        <GameHistoryTracker gameHistory={gameHistory} rewindBoardToSnapshot={rewindBoardToSnapshot} myPiece={myPiece} />
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
