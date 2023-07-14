import '../css/Board.css'

const Dot = ({ className, val, bgColor, letter }) => {
  return <span className={className} val={val} style={{backgroundColor: bgColor}}>{letter}</span>
}

export default Dot
