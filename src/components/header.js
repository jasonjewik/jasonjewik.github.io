import React from 'react'
import ThemeContext from '../context/theme-context'
import styled from '@emotion/styled'
import Emoji from 'a11y-react-emoji'

const DarkModeToggler = styled.button(({ color }) => ({
  color: color,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  right: '24px',
  top: '16px',
  fontSize: '0.75em',
}))

const Header = () => (
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

export default Header
