import '../css/Board.css'

const Dot = ({ className, bgColor, id }) => {
  return (
    <span
      id={id}
      className={className}
      style={{ backgroundColor: bgColor }}
    ></span>
  )
}

export default Dot
