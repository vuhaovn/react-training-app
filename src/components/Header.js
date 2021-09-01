import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onShow, show }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
      color={show ? 'red': 'green'}
      text={show ? 'Close task' : 'Add Task'} 
      onClick={onShow} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
