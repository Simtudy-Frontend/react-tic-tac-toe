import styled from 'styled-components'
import Cell from '@/components/Cell'
import { BoardData, Player, Position, Winner } from '@/types'

interface Props {
  boardData: BoardData
  myPiece: Player
  winner: Winner
  updateBoard: (position: Position) => void
}

const Board = ({ boardData, myPiece, winner, updateBoard }: Props) => {
  return (
    <Container>
      {boardData.map((row, i) =>
        row.map((_, j) => (
          <Cell
            key={`${i}-${j}`}
            position={`${i}-${j}`}
            cellData={boardData[i][j]}
            updateBoard={updateBoard}
            myPiece={myPiece}
            winner={winner}
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
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid black;
`
