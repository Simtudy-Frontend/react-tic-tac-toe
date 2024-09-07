import { BoardData } from '@/types'

export const initialBoardData: BoardData = Array.from({ length: 3 }, (_, i) =>
  Array.from({ length: 3 }, (_, j) => ({ row: i, col: j, value: '' }))
)


export const X_WIN = 3
export const O_WIN = -3
export const INDEX_TEMPLATE = [0, 1, 2]
