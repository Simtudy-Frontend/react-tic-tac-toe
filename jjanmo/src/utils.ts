import { BoardData } from '@/types'

export const isFull = (boardData: BoardData) =>
  boardData
    .flat()
    .map((cell) => cell.value)
    .every(Boolean)

export const getPosition = (boardData: BoardData) => {
  if (isFull(boardData)) return null

  while (true) {
    const x = Math.floor(Math.random() * 3)
    const y = Math.floor(Math.random() * 3)
    if (!boardData[x][y].value) return { x, y }
  }
}
