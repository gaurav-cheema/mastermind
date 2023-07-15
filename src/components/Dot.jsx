import '../css/Board.css'

const Dot = ({ className, val, id }) => {
  return <span className={className} id={id} val={val}></span>
}

export default Dot
