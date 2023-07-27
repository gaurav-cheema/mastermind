import { useState, useRef } from 'react'

import { MainLogic } from '../logic/Mastermind'
import Row from './Row'
import Choices from './Choices'
import '../css/Board.css'

const Board = () => {
  // const inputCountRef = useRef(0)
  // const currChoiceRef = useRef('')
  const numOfRows = 10
  const rowWidth = 4
  let choice
  let row,
    col = null

  const currentDot = useRef(0)
  const inputCount = useRef(0)

  let mainDotStates = []
  let resDotStates = []
  let arrowStates = []
  for (let i = 0; i < numOfRows; i++) {
    let temp1 = []
    let temp2 = []
    for (let j = 0; j < rowWidth; j++) {
      let id = i * rowWidth + j
      temp1.push({ id: id, bgColor: 'white' })
      temp2.push({ id: 'res' + id, bgColor: 'gray' })
    }
    arrowStates.push({ id: 'aa' + i, letter: '' })
    mainDotStates.push(temp1)
    resDotStates.push(temp2)
    temp1 = []
    temp2 = []
  }

  arrowStates[0].letter = `\u23fa`

  const [mainColorState, setMainColorState] = useState(mainDotStates)
  const [resColorState, setResColorState] = useState(resDotStates)
  const [activeArrowState, setActiveArrowState] = useState(arrowStates)

  const handleInput = e => {
    choice = e.currentTarget.id
    row = Math.max(Math.floor(currentDot.current / rowWidth), 0)
    col = currentDot.current % rowWidth

    if (row === 10) {
      alert('YOU LOST... You have brought shame to your family.')
      window.location.reload()
    }

    let { modufive, pColor, pCount, pActiveDot, blackCount, whiteCount } =
      MainLogic(
        choice,
        currentDot.current,
        inputCount.current,
        mainColorState[row]
      )

    if (modufive === 'purge') {
      let clearingRow = Math.floor(currentDot.current / rowWidth)
      console.log(clearingRow)
      for (let i = 0; i < rowWidth; i++) {
        mainColorState[clearingRow][i].bgColor = 'white'
      }
    }

    if (modufive === true) {
      mainColorState[row][col].bgColor = pColor
    }

    if (modufive === 'overwrite') {
      pCount = row * rowWidth
    }

    if (modufive === 'updateResult') {
      let ind = 0
      for (let i = 0; i < blackCount; i++) {
        resColorState[row][ind].bgColor = 'black'
        ind++

        if (ind === 4) {
          alert('YOU WON!!! Congratulations on having deductive skills.')
          window.location.reload()
        }
      }

      for (let i = 0; i < whiteCount; i++) {
        resColorState[row][ind].bgColor = 'white'
        ind++
      }
      activeArrowState[row].letter = `\u2714`
      if (row + 1  != numOfRows) {
        activeArrowState[row+1].letter = `\u23fa`
      }
    }

    inputCount.current = pCount
    currentDot.current = pActiveDot
    setMainColorState([...mainColorState])
    setResColorState([...resColorState])
    setActiveArrowState([...activeArrowState])
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
            activeArrowState={activeArrowState}
          />
        </div>
      </div>
    </>
  )
}

export default Board
