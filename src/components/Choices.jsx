import '../css/Board.css'
import ChoiceBtn from './ChoiceBtn'
import { colors } from '../shared/Colors'

const Choices = ({ onClick }) => {
  const colorsBtn = []

  for (let i = 0; i < colors.length; i++) {
    colorsBtn.push(
      <ChoiceBtn
        id={colors[i]}
        className='colorDot'
        bgColor={colors[i]}
        onClick={onClick}
      />
    )
  }
  colorsBtn.push(
    <ChoiceBtn
      id='clearBtn'
      className='clearBtnStyle'
      word='CLEAR'
      bgColor='black'
      onClick={onClick}
    />
  )
  colorsBtn.push(
    <ChoiceBtn
      id='enterBtn'
      className='clearBtnStyle'
      word='ENTER'
      bgColor='black'
      onClick={onClick}
    />
  )

  const setActiveColor = () => {
    
  }

  return (
    <>
      <div className='choicesBoard'>
        <div className='colorTray' onClick={setActiveColor}>{colorsBtn}</div>
      </div>
    </>
  )
}

export default Choices
