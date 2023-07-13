import Row from './Row'
import Choices from './Choices'
import '../css/Board.css'

// const mainDivStyle = {
//   display: 'flex',
//   justifyContent: 'center'
// }

const Board = () => {
  const boardLength = 10
  const rows = []

  for (let i = boardLength - 1; i >= 0; i--) {
    rows.push(
      <div>
        <Row val={i} rowNumber={i} />
      </div>
    )
  }
  return (
    <>
      <div className='enclosure'>
        <Choices />
        <div className='board'>{rows}</div>
      </div>
    </>
  )
}

/* <div style={mainDivStyle}>
  <div className='enclosure'>
    <div className='playerPegs'>
      <Choices />
    </div>
    <ul className='board'>{rows}</ul>
  </div>
</div> */

export default Board
