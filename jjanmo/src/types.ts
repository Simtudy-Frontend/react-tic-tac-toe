export interface CellData {
  row: number
  col: number
  value: Player
}
export type RowData = CellData[]
export type BoardData = RowData[]
export type Position = { x: number; y: number }

export type Player = 'X' | 'O' | ''
export type Winner = Player | 'draw'

export interface GameHistroySnapshot {
  boardData: BoardData
  player: Player
  winner: Winner
}
