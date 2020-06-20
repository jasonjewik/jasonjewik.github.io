import { Link } from 'gatsby'
import React from 'react'
import ThemeContext from '../context/theme-context'
import styled from '@emotion/styled'
import Emoji from 'a11y-react-emoji'

const DarkModeToggler = styled.button(({ color }) => ({
  color: color,
  marginTop: '5px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  right: '15px',
  top: '10px',
}))

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {theme => (
      <header>
        <div>
          <DarkModeToggler
            color={theme.dark ? '#fff' : '#2a2b2d'}
            onClick={theme.toggleDark}
          >
            {theme.dark ? (
              <span>
                Light mode <Emoji symbol="🌞" label="sun" />
              </span>
            ) : (
              <span>
                Dark mode <Emoji symbol="🌜" label="moon" />
              </span>
            )}
          </DarkModeToggler>
        </div>
      </header>
    )}
  </ThemeContext.Consumer>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
