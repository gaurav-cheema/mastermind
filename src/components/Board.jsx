import { useState, useEffect } from 'react'

import Row from './Row'
import Choices from './Choices'
import '../css/Board.css'

const Board = () => {
  const [activeRow, setActiveRow] = useState(0)

  return (
    <>
      <div className='enclosure'>
        <Choices />
        <div className='board'>
          <Row count='10' />
        </div>
      </div>
    </>
  )
}

export default Board
