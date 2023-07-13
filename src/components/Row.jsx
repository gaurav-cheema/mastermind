import Dot from './Dot'
import '../css/Board.css'

const Row = ({ rowNumber, val }) => {
  const rowLength = 4
  const dots = []
  const resBar = []

  for (let i = 0; i < rowLength; i++) {
    dots.push(<Dot className='mainDot' key={rowNumber * 4 + i} />)
    resBar.push(<div className='resDot'>a</div>)
  }

  return (
    <>
      <div className='flex-container'>
        <div className='row'>{dots}</div>
        <div className='grid-container'>{resBar}</div>
      </div>
    </>
  )
}

export default Row
