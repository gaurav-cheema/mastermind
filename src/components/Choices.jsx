import Dot from './Dot'
import '../css/Board.css'

const clearBtnStyle = {
  // display: 'flex',
  backgroundColor: 'black',
  padding: '5px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  margin: '20px 0'
}


const Choices = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'brown']
  const colorsBtn = []

  for (let i = 0; i < colors.length; i++) {
    colorsBtn.push(<Dot className='colorDot' bgColor={colors[i]} />)
  }

  return (
    <>
      <div className='choicesBoard'>
        <div className='colorTray'>{colorsBtn}</div>
        <div>
          <div style={clearBtnStyle}>CLEAR</div>
          <div style={clearBtnStyle}>ENTER</div>
        </div>
      </div>
    </>
  )
}

export default Choices
