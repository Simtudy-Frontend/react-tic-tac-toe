import { CellData } from '@/types'
import styled from 'styled-components'

interface Props {
  cellData: CellData
}

const Cell = ({ cellData }: Props) => {
  return <Container>{cellData.value}</Container>
}

export default Cell

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`
