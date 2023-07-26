import { useState, useRef, useEffect } from 'react'

import { MainLogic } from '../logic/Mastermind'
import Row from './Row'
import Choices from './Choices'
import '../css/Board.css'

const Board = () => {
  // const inputCountRef = useRef(0)
  // const currChoiceRef = useRef('')
  const numOfRows = 10
  let choice
  let row,
    col = null

  const overwrite = useRef(false)
  const currentDot = useRef(0)
  const inputCount = useRef(0)

  let mainDotStates = []
  let resDotStates = []
  for (let i = 0; i < numOfRows; i++) {
    let temp1 = []
    let temp2 = []
    for (let j = 0; j < 4; j++) {
      let id = i * 4 + j
      temp1.push({ id: id, bgColor: 'white' })
      temp2.push({ id: 'res' + id, bgColor: 'gray' })
    }
    mainDotStates.push(temp1)
    resDotStates.push(temp2)
    temp1 = []
    temp2 = []
  }

  const [mainColorState, setMainColorState] = useState(mainDotStates)
  const [resColorState, setResColorState] = useState(resDotStates)

  const handleInput = e => {
    choice = e.currentTarget.id
    let { modufive, pColor, pCount, pActiveDot } =
      MainLogic(choice, currentDot.current, inputCount.current)

    row = Math.max(Math.floor(currentDot.current / 4), 0)
    col = currentDot.current % 4

    if (modufive === 'purge') {
      let clearingRow = Math.floor(currentDot.current / 4)
      console.log(clearingRow)
      for (let i = 0; i < 4; i++) {
        mainColorState[clearingRow][i].bgColor = 'white'
      }
    }

    if (modufive === true) {
      mainColorState[row][col].bgColor = pColor
    }

    if (modufive === 'overwrite') {
      pCount = row * 4
    }

    inputCount.current = pCount
    currentDot.current = pActiveDot
    setMainColorState([...mainColorState])

    
  }

  return (
    <>
      <div className='enclosure'>
        <Choices
          handleInput={handleInput}
          onClick={currentDot => currentDot + 1}
        />
        <div className='board'>
          <Row
            count={numOfRows}
            mainColorState={mainColorState}
            resColorState={resColorState}
          />
        </div>
      </div>
    </>
  )
}

export default Board
