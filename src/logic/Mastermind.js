import { code } from '../shared/Colors'

/*
? what do I want to do??
* 1. if the input is clear, then clear the row, set the activeDot back to the beginning of the row, set inputCount to 0 since the input is cleared

* 2. If its just an ordinary choice, set the activeDot to that color, increment inputCount by 1, increment the activeDot by 1
*     if inputCOunt is not 4 and user presses enter, nothing happens

* 3. Unless the inputCount is already 4. Then do nothing or display alert

* 4. If the input count is 4, and user presses enter:
*     Then we want to check the input and deliver result.
*     Increment the activeDot by 1, set inputCount to 0
*     There is no changing of colors involved.

*/

/*
?? How to implement resDot output?
* 1. Invoke checkCode in MainLogic and return the resDots?
*     That will make it more organized to update their state.

* 2. Invoke checkCode in handleInput separately?
*     Not sure yet how that will look.
*     Will require us to write more code underneat setMainColorState line

*/

function MainLogic (input, currentDot, inputCount, colorArr) {
  let modify = true

  // console.log(code);

  //! HUGE PROBLEM!!
  //! When input count reaches 4, active dot is shifted to next row.
  //! So, the player is not able to clear the input
  let currentRow = Math.floor(currentDot / 4)
  let black,
    white = null

  // console.log(`currDot: ${currentDot} --- currRow: ${currentRow}`)
  // console.log(colorArr)

  switch (true) {
    case input === 'clearBtn':
      modify = 'purge'
      inputCount = 0
      currentDot = currentRow * 4
      break

    case input === 'enterBtn':
      if (inputCount < 4) {
        alert('Only a 4 colored code can be submitted')
      } else if (inputCount === 4) {
        modify = 'updateResult'
        inputCount = 0
        currentDot = (currentRow + 1) * 4
        colorArr = colorArr.map(a => a.bgColor)
        ;({ black, white } = checkCode(colorArr))
      } else {
        console.log('ERROR: If you reached here, the code is not right')
      }
      break

    case input != 'clearBtn' && input != 'enterBtn':
      if (inputCount < 4) {
        modify = true
        inputCount += 1
        if (inputCount !== 4) currentDot += 1
      } else if (inputCount === 4) {
        modify = false
        currentDot = currentRow * 4 + 3
      } else {
        console.log('ERROR - input count over 4! Bug somewhere')
      }
      break

    default:
      console.log('ERROR - You should not be reaching this point')
      break
  }

  return {
    modufive: modify,
    pColor: input,
    pCount: inputCount,
    pActiveDot: currentDot,
    blackCount: black,
    whiteCount: white
  }
}

function checkCode (inputCode) {
  let input = [...inputCode]
  let temp = [...code]
  let black = 0
  let white = 0

  for (let i = 0; i < code.length; i++) {
    if (temp[i] === input[i]) {
      black += 1
      input[i] = null
      temp[i] = null
    }
  }

  console.log(`black: ${black}`)

  for (let i = 0; i < code.length; i++) {
    if (input[i] !== null) {
      let tempIndex = temp.indexOf(input[i])
      if (tempIndex !== -1) {
        white += 1
        temp[tempIndex] = null
      }
    }
  }

  console.log(black, ' ', white)
  return {
    black: black,
    white: white
  }
}

export { MainLogic, checkCode }
