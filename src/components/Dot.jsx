import '../css/Board.css'

const Dot = ({ className, bgColor }) => {
  return <span className={className} style={{backgroundColor: bgColor}}></span>
}

export default Dot
