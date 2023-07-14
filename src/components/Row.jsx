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
      resBar.push(<Dot className='resDot' val={rowInd * 4 + dotInd} letter="o"/>)
    }
    rows.push(
      <div className='flex-container'>
        <div className='row'>{dots}</div>
        <div className='grid-container'>{resBar}</div>
      </div>
    )
    dots = []
    resBar = []
  }

  // //* makes a row from mainDots and resDots
  // for (let i = 0; i < rowLength; i++) {
  //   dots.push(<Dot className='mainDot' key={rowNumber * 4 + i} />)
  //   resBar.push(<div className='resDot'>a</div>)
  // }

  // //* makes as many rows as <count>
  // for (let i = 0; i < count; i++) {
  //   rows.push(
  //     <div className='flex-container'>
  //       <div className='row'>{dots}</div>
  //       <div className='grid-container'>{resBar}</div>
  //     </div>
  //   )
  // }

  return rows
}

export default Row
