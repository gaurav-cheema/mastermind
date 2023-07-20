import { useState, useEffect, useRef } from 'react'

import MainLogic from '../logic/Mastermind'
import Row from './Row'
import Choices from './Choices'
import '../css/Board.css'

const Board = () => {
  // const inputCountRef = useRef(0)
  // const currChoiceRef = useRef('')
  let retObj = null

  const [color, setColor] = useState(
    
  )

  function handleInput (e) {
    const choice = e.currentTarget.id
    retObj = MainLogic(choice)
  }

  function updateDot () {}

  return (
    <>
      <div className='enclosure'>
        <Choices handleInput={handleInput} />
        <div className='board'>
          <Row count='10' />
        </div>
      </div>
    </>
  )
}

export default Board
