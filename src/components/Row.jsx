import Dot from './Dot'
import '../css/Board.css'

const Row = ({ count, mainColorState, resColorState, activeArrowState }) => {
  const rowLength = 4
  let dots = []
  let resBar = []
  let rows = []

  //* make a row of mainDots and resDots
  //* then add n rows to array to return
  for (let rowInd = 0; rowInd < count; rowInd++) {
    for (let dotInd = 0; dotInd < rowLength; dotInd++) {
      dots.push(
        <Dot
          className='mainDot'
          id={rowInd * 4 + dotInd}
          key={rowInd * 4 + dotInd}
          bgColor={mainColorState[rowInd][dotInd].bgColor}
        />
      )
      resBar.push(
        <Dot
          className='resDot'
          letter=''
          id={'res' + (rowInd * 4 + dotInd)}
          key={'res' + (rowInd * 4 + dotInd)}
          bgColor={resColorState[rowInd][dotInd].bgColor}
        />
      )
    }
    rows.push(
      <div className='flex-container' key={'row' + rowInd} id={'row' + rowInd}>
        <div className='row'>{dots}</div>
        <div className='grid-container'>{resBar}</div>
        <div className='flex-container activeArrowContainer'>
          <Dot
            className='activeArrow'
            key={'aa' + rowInd}
            letter={activeArrowState[rowInd].letter}
          />
        </div>
      </div>
    )
    dots = []
    resBar = []
  }

  return rows
}

export default Row
