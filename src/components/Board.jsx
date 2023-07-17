// import { useState, useEffect } from 'react'
// import

import Row from './Row'
import Choices from './Choices'
import '../css/Board.css'

const Board = () => {
  let activeRow = 0
  let activeColor = null

  const handle = e => {
    activeColor = e.currentTarget.id
  }

  return (
    <>
      <div className='enclosure'>
        <Choices onClick={handle} />
        <div className='board'>
          <Row count='10' />
        </div>
      </div>
    </>
  )
}

export default Board
