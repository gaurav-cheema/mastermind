import Dot from './Dot'
import '../css/Board.css'

const Row = ({ rowNumber }) => {
  const rowLength = 4;
  const dots = []

  for (let i = 0; i < rowLength; i++) {
    dots.push(<Dot key={i} />)    
  }
  return (
    <>
      {dots}
    </>
  )
}

export default Row
