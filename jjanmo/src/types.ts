export interface CellData {
  row: number
  col: number
  value: Player
}
export type RowData = CellData[]
export type BoardData = RowData[]
export type Player = 'X' | 'O' | ''
export type Position = { x: number; y: number }
