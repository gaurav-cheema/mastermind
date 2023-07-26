const colors = ['red', 'aqua', 'lime', 'yellow', 'fuchsia']

const generateCode = () => {
  const colorLen = colors.length
  const codeLen = 4
  const code = []

  for (let i = 0; i < codeLen; i++) {
    code.push(colors[Math.floor(Math.random() * colorLen)])
  }

  return code
  console.log(code)
}

let code = generateCode()

export { colors, code }
