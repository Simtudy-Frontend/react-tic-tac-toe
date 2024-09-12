import { CellData, Player, Position, Winner } from '@/types'
import styled from 'styled-components'

interface Props {
  cellData: CellData
  position: string
  myPiece: Player
  winner: Winner
  updateBoard: (position: Position) => void
}

const Cell = ({ cellData, position, myPiece, updateBoard, winner }: Props) => {
  const handleClick = () => {
    if (winner) return alert('게임이 종료되었습니다.')
    if (!myPiece) return alert('먼저 플레이어를 선택해주세요.')
    if (cellData.value) return alert('이미 선택된 칸입니다.')

    const [x, y] = position.split('-')
    updateBoard({ x: Number(x), y: Number(y) })
  }

  return <Container onClick={handleClick}>{cellData.value}</Container>
}

export default Cell

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  font-size: 30px;
`
