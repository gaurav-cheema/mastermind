import '../css/Board.css'

const Dot = ({ className, bgColor, id, letter }) => {
  return (
    <span
      id={id}
      className={className}
      style={{ backgroundColor: bgColor }}
    >{letter}</span>
  )
}

export default Dot
