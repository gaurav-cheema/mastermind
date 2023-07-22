import { useState } from 'react'
import '../css/Board.css'
import ChoiceBtn from './ChoiceBtn'
import { colors } from '../shared/Colors'

const Choices = ({ handleInput, onClick }) => {
  const colorsBtn = []

  for (let i = 0; i < colors.length; i++) {
    colorsBtn.push(
      <ChoiceBtn
        key={colors[i]}
        id={colors[i]}
        className='colorDot'
        bgColor={colors[i]}
        handleMethod={e => handleInput(e)}
      />
    )
  }
  colorsBtn.push(
    <ChoiceBtn
      key='clearBtn'
      className='clearBtnStyle'
      word='CLEAR'
      bgColor='black'
      onClick={e => handleInput(e)}
    />
  )
  colorsBtn.push(
    <ChoiceBtn
      key='enterBtn'
      className='clearBtnStyle'
      word='ENTER'
      bgColor='black'
      onClick={e => handleInput(e)}
    />
  )

  return (
    <>
      <div className='choicesBoard' key='choiceBoard'>
        <div className='colorTray'>{colorsBtn}</div>
      </div>
    </>
  )
}

export default Choices
