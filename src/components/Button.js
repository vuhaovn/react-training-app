import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
  return <button className='btn edge' style={{backgroundColor: color}} onClick={onClick}>{text}</button>
}

Button.defaultProps = {

}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
