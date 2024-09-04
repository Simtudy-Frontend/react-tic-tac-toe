import styled from 'styled-components'
import Cell from '@/components/Cell'

const gridData = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const Board = () => {
  return (
    <Container>
      {gridData.map((row, i) =>
        row.map((_, j) => <Cell value={gridData[i][j]} />)
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
