import '../css/Board.css'

const Dot = ({ className, bgColor, updateColor, id, dotNum }) => {
  return (
    <span
      // dotNum={dotNum}
      id={id}
      className={className}
      style={{ backgroundColor: bgColor }}
    ></span>
  )
}

export default Dot
