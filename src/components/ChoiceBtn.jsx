import '../css/Board.css'

const ChoiceBtn = ({ handleMethod, className, bgColor, id, word }) => {

  const test = (e) => {
    console.log('test');
  }

  return (
    <button
      id={id}
      className={className}
      style={{ backgroundColor: bgColor }}
      onClick={e=>handleMethod(e)}
    >
      {word}
    </button>
  )
}

export default ChoiceBtn
