import { useState, useEffect, useRef } from 'react'

import MainLogic from '../logic/Mastermind'
import Row from './Row'
import Choices from './Choices'
import '../css/Board.css'

const Board = () => {
  // const inputCountRef = useRef(0)
  // const currChoiceRef = useRef('')
  const numOfRows = 10
  let choice;
  let retObj = null

  const [activeDot, setActiveDot] = useState(5)

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

  const handleInput = (e) => {
    choice = e.currentTarget.id
    const c = [Math.floor(activeDot/4), activeDot % 4]
    mainColorState[c[0]][c[1]].bgColor = choice
    setMainColorState([...mainColorState])
    setActiveDot(activeDot+1)
  }

  return (
    <>
      <div className='enclosure'>
        <Choices handleInput={handleInput}/>
        <div className='board'>
          <Row count={numOfRows} mainColorState={mainColorState} resColorState={resColorState}/>
        </div>
      </div>
    </>
  )
}

export default Board
