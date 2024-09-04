export interface CellData {
  row: number
  col: number
  value: string
}
export type RowData = CellData[]
export type BoardData = RowData[]
