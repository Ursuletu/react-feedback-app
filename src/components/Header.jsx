import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color:textColor,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>
          {text}
        </h2>
      </div>
    </header>
  )
}

// If nothing is explicitly passed in, these are used by default
Header.defaultProps = {
  text: 'Feedback UI', 
  bgColor: 'rgba(0,0,0,0.4)',
  textColor : '#FF6a95'
}

Header.propTypes = { // Not necessarily needed
  text: PropTypes.string,
}

export default Header