import styled from 'styled-components'
import { Player, Winner } from '@/types'

interface Props {
  turn: Player
  winner: Winner
}

const GameStatus = ({ turn, winner }: Props) => {
  return (
    <div>
      {!winner && turn && <Turn>{turn} 차례</Turn>}
      {winner === 'draw' && <Result>무승부입니다.</Result>}
      {winner && winner !== 'draw' && <Result>승자는 {winner} 입니다.</Result>}
    </div>
  )
}

export default GameStatus

const Turn = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
const Result = styled.div`
  width: 300px;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 600;
  color: #e74c3c;
  text-align: center;
`
