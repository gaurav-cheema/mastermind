import '../css/Board.css'

const Dot = ({ className, color, updateColor, id }) => {
  return (
    <span
      id={id}
      className={className}
      style={{ backgroundColor: color }}
    ></span>
  )
}

export default Dot
