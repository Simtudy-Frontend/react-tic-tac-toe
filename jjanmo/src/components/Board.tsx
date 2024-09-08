import styled from 'styled-components'
import Cell from '@/components/Cell'
import { BoardData, Player, Position } from '@/types'
import useWinner from '@/hooks/useWinner'

interface Props {
  boardData: BoardData
  updateBoard: (position: Position) => void
  myPiece: Player
}

const Board = ({ boardData, updateBoard, myPiece }: Props) => {
  const { winner } = useWinner(boardData)

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
