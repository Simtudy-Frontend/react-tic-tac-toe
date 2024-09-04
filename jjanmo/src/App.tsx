import Board from '@/components/Board'
import { BoardData } from './types'
import styled from 'styled-components'

const boardData: BoardData = Array.from({ length: 3 }, (_, i) =>
  Array.from({ length: 3 }, (_, j) => ({ row: i, col: j, value: '' }))
)

const App = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button>X</Button>
        <Button>O</Button>
      </ButtonContainer>
      <Board data={boardData} />
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonContainer = styled.div`
  width: 100%;
  margin: 16px;
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  padding: 8px 24px;
  margin: 6px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  opacity: 0.8;
  font-size: 24px;
  background-color: rgba(52, 73, 94, 1);
  color: white;
  &:hover {
    opacity: 1;
    transition: 1s;
  }
`
