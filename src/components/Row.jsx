import Dot from './Dot'
import '../css/Board.css'

const Row = ({ val, count }) => {
  const rowLength = 4
  let dots = []
  let resBar = []
  let rows = []

  //* make a row of mainDots and resDots
  //* then add n rows to array to return
  for (let rowInd = 0; rowInd < count; rowInd++) {
    for (let dotInd = 0; dotInd < rowLength; dotInd++) {
      dots.push(<Dot className='mainDot' key={rowInd * 4 + dotInd} />)
      resBar.push(
        <Dot className='resDot' val={rowInd * 4 + dotInd} letter='' />
      )
    }
    rows.push(
      <div className='flex-container'>
        <div className='row'>{dots}</div>
        <div className='grid-container'>{resBar}</div>
        <div className='activeArrow'></div>
      </div>
    )
    dots = []
    resBar = []
  }

  return rows
}

export default Row
