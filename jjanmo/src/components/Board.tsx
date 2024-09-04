import styled from 'styled-components'
import Cell from '@/components/Cell'
import { BoardData } from '@/types'

interface Props {
  data: BoardData
}

const Board = ({ data }: Props) => {
  return (
    <Container>
      {data.map((row, i) => row.map((_, j) => <Cell cellData={data[i][j]} />))}
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
