import styled from 'styled-components'
import Cell from '@/components/Cell'
import { BoardData, Player, Position } from '@/types'

interface Props {
  data: BoardData
  updateBoard: (position: Position) => void
  myPiece: Player
}

const Board = ({ data, updateBoard, myPiece }: Props) => {
  return (
    <Container>
      {data.map((row, i) =>
        row.map((_, j) => (
          <Cell
            key={`${i}-${j}`}
            position={`${i}-${j}`}
            cellData={data[i][j]}
            updateBoard={updateBoard}
            myPiece={myPiece}
          />
        ))
      )}
    </Container>
  )
}
export default Board

const Container = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid black;
`
