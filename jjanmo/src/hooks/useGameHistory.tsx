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

    const newGameSnapshot = { boardData: boardData.map<RowData>((row) => row.map<CellData>((cell) => ({ ...cell }))), player: turn }
    setGameHistory((prev) => [...prev, newGameSnapshot])
    console.log(gameHistory)
  }, [boardData])

  return { gameHistory }
}

export default useGameHistory
