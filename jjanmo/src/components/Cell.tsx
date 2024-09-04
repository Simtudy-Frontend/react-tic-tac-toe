import styled from 'styled-components'

interface Props {
  value: number
}

const Cell = ({ value }: Props) => {
  return <Container>{value}</Container>
}

export default Cell

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`
