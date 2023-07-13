import Dot from './Dot'
import '../css/Board.css'

const Choices = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'brown']
  const colorsBtn = []

  for (let i = 0; i < colors.length; i++) {
    colorsBtn.push(<Dot className='colorDot' bgColor={colors[i]}/>)
  }

  colorsBtn.push(<div>
    X
  </div>)

  return (
    <>
      <div className='choicesBoard'>{colorsBtn}</div>
    </>
  )
}

export default Choices

/* <div className='playerPegs'>a</div>
<div className='playerPegs'>a</div>
<div className='playerPegs'>a</div>
<div className='playerPegs'>a</div>
<div className='playerPegs'>a</div>
<div className='playerPegs'>X</div> */
