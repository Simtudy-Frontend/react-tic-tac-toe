import styled from 'styled-components'

interface Props {
  resetGame: () => void
}

const ResetButton = ({ resetGame }: Props) => {
  return <Button onClick={resetGame}>리셋</Button>
}

export default ResetButton

const Button = styled.button`
  padding: 4px 40px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  border: 1px solid #1abc9c;
  background-color: #16a085;
  color: white;
  transition: 0.3s;
  &:hover {
    background-color: #10ac84;
  }
`
