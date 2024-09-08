import styled from 'styled-components'
import { memo, MouseEvent, useState } from 'react'
import { Player } from '@/types'

interface Props {
  updateTurn: (initialTurn?: Player) => void
}

const SelectPlayerButtons = ({ updateTurn }: Props) => {
  const [selected, setSelected] = useState<Player>('')

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (selected) return

    const selectedPlayer = e.currentTarget.textContent as Player
    updateTurn(selectedPlayer)
    setSelected(selectedPlayer)
  }

  return (
    <ButtonContainer>
      <Button onClick={handleButtonClick} selected={selected === 'X'}>
        X
      </Button>
      <Button onClick={handleButtonClick} selected={selected === 'O'}>
        O
      </Button>
    </ButtonContainer>
  )
}

export default memo(SelectPlayerButtons)

const ButtonContainer = styled.div`
  width: 100%;
  margin: 10px 16px;
  display: flex;
  justify-content: center;
`
const Button = styled.button<{ selected: boolean }>`
  padding: 2px 36px;
  margin: 6px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  opacity: 0.8;
  font-size: 24px;
  background-color: ${({ selected }) => (selected ? '#3498db' : '#7f8c8d')};
  color: white;
`
