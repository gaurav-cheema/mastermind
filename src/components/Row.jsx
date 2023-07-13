import Dot from './Dot'
import '../css/Board.css'

const Row = ({ rowNumber }) => {
  const rowLength = 4
  const dots = []
  const resBar = []

  for (let i = 0; i < rowLength; i++) {
    dots.push(<Dot className='mainDot' key={rowNumber * 4 + i} />)
    resBar.push(<div className='resSquare' />)
  }

  return (
    <>
      <div className='grid-container'>
        <div className='row'>{dots}</div>
      </div>
      {/* <div>{resBar}</div> */}
    </>
  )
}

export default Row
