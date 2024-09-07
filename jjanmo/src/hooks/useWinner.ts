import { BoardData, Player, Winner } from '@/types'
import { isFull } from '@/utils'
import { useEffect, useState } from 'react'

const X_WIN = 3
const O_WIN = -3
const INDEX_TEMPLATE = [0, 1, 2]

const useWinner = (boardData: BoardData) => {
  const [winner, setWinner] = useState<Winner>('')

  const convertValueToNumber = (piece: Player) => (piece === 'X' ? 1 : piece === 'O' ? -1 : 0)

  const checkWinner = (boardData: BoardData) => {
    const row0 = INDEX_TEMPLATE.reduce((acc, col) => acc + convertValueToNumber(boardData[0][col].value), 0)
    const row1 = INDEX_TEMPLATE.reduce((acc, col) => acc + convertValueToNumber(boardData[1][col].value), 0)
    const row2 = INDEX_TEMPLATE.reduce((acc, col) => acc + convertValueToNumber(boardData[2][col].value), 0)
    const col0 = INDEX_TEMPLATE.reduce((acc, row) => acc + convertValueToNumber(boardData[row][0].value), 0)
    const col1 = INDEX_TEMPLATE.reduce((acc, row) => acc + convertValueToNumber(boardData[row][1].value), 0)
    const col2 = INDEX_TEMPLATE.reduce((acc, row) => acc + convertValueToNumber(boardData[row][2].value), 0)
    const cross1 = INDEX_TEMPLATE.reduce((acc, i) => acc + convertValueToNumber(boardData[i][i].value), 0)
    const cross2 = INDEX_TEMPLATE.reduce((acc, i) => acc + convertValueToNumber(boardData[i][2 - i].value), 0)

    if ([row0, row1, row2, col0, col1, col2, cross1, cross2].includes(X_WIN)) return setWinner('X')
    if ([row0, row1, row2, col0, col1, col2, cross1, cross2].includes(O_WIN)) return setWinner('O')
    if (isFull(boardData)) return setWinner('draw')

    setWinner('')
  }

  useEffect(() => {
    checkWinner(boardData)
  }, [boardData])

  return { winner }
}

export default useWinner
