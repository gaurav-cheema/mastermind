import Board from '../components/Board'

export default function MainLogic (choice) {
  let arr = []
  let input = choice
  let inputCount = 0
  let activeRow = 0

  if (input === 'clearBtn') {
    arr = []
    inputCount = 0
  } //todo re-render row

  if (arr.length == 4) {
    if (input === 'enterBtn') {
      arr = []
      inputCount = 0
      activeRow++
      //todo Fetch result
      //todo update resDots and re-render
    } else {
      //todo Do nothing or alert stating input complete (?)
    }
  } else {
    if (input === 'enterBtn') {
      //todo Do nothing or show alert?
    } else {
      arr.push(input)
      inputCount++
    }
  }
  return {
    'currentDot': activeRow * 4 + inputCount,
    'blackResDot': 2,
    'whiteResDot': 2
  }
}

function checkCode (inputCode, targetCode) {
  let temp = targetCode

  for (let i = 0; i < targetCode.length; i++) {
    
    
  }
}
