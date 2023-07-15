import '../css/Board.css'
import ChoiceBtn from './ChoiceBtn'

const Choices = ({ onClick }) => {
  const colors = ['red', 'blue', 'green', 'yellow', 'brown']
  const colorsBtn = []

  const handleColorBtn = () => {
    console.log('clicked!')
  }

  for (let i = 0; i < colors.length; i++) {
    colorsBtn.push(
      <ChoiceBtn
        id={'colorBtn' + (i + 1)}
        className='colorDot'
        bgColor={colors[i]}
        onClick={handleColorBtn}
      />
    )
  }
  colorsBtn.push(
    <ChoiceBtn
      id='clearBtn'
      className='clearBtnStyle'
      word='CLEAR'
      bgColor='black'
    />
  )
  colorsBtn.push(
    <ChoiceBtn
      id='enterBtn'
      className='clearBtnStyle'
      word='ENTER'
      bgColor='black'
      // onClick={handleColorBtn}
    />
  )

  return (
    <>
      <div className='choicesBoard'>
        <div className='colorTray'>{colorsBtn}</div>
      </div>
    </>
  )
}

export default Choices
