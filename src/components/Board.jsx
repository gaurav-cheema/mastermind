import Row from './Row'
import '../css/Board.css'

const Board = () => {
  const boardLength = 10
  const rows = []

  for (let i = 0; i < boardLength; i++) {
    rows.push(<Row key={i} />)
  }
  return <div className='board'>{rows}</div>
}

export default Board
