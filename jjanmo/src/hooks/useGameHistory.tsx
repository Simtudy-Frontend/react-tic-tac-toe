import { useEffect, useState } from 'react'
import { BoardData, CellData, GameHistroy, Player, RowData } from '@/types'

interface Params {
  boardData: BoardData
  turn: Player
}

const useGameHistory = ({ boardData, turn }: Params) => {
  const [gameHistory, setGameHistory] = useState<GameHistroy>([])

  useEffect(() => {
    if (!turn) return
    console.log('@@', boardData)

    const newGameSnapshot = { boardData: boardData.map<RowData>((row) => row.map<CellData>((cell) => ({ ...cell }))), player: turn }
    setGameHistory((prev) => [...prev, newGameSnapshot])
    console.log(gameHistory)
  }, [turn])

  return { gameHistory }
}

export default useGameHistory
