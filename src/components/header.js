import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ThemeContext from '../context/theme-context'

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {theme => (
      <header>
        <div>
          <button className="dark-switcher" onClick={theme.toggleDark}>
            {theme.dark ? (
              <span>Light mode 🌞</span>
            ) : (
              <span>Dark mode 🌜</span>
            )}
          </button>
        </div>
      </header>
    )}
  </ThemeContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
