import { BoardData, Player } from '@/types'
import { isFull } from '@/utils'
import { INDEX_TEMPLATE, O_WIN, X_WIN } from '@/constants'

const useWinner = () => {
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

    if ([row0, row1, row2, col0, col1, col2, cross1, cross2].includes(X_WIN)) return 'X'
    if ([row0, row1, row2, col0, col1, col2, cross1, cross2].includes(O_WIN)) return 'O'
    if (isFull(boardData)) return 'draw'

    return null
  }

  return { checkWinner }
}

export default useWinner
