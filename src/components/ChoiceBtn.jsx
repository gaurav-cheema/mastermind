import '../css/Board.css'

const ChoiceBtn = ({ onClick, className, bgColor, id, word }) => {
  // const handleClicks = () => {
  //   console.log("clicked!!")
  // }

  return (
    <button id={id} className={className} style={{ backgroundColor: bgColor }}
    onClick={onClick}>
      {word}
    </button>
  )
}

export default ChoiceBtn
