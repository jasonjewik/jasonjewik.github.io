import React from 'react'
import ThemeContext from '../context/theme-context'
import styled from '@emotion/styled'
import Emoji from 'a11y-react-emoji'
import { withSize } from 'react-sizeme'

const DarkModeToggler = withSize()(({ theme, size }) => {
  let color, clickBehavior, visibility

  const ToggleButton = styled.button(({ color, visibility }) => ({
    color: color,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    right: '1.5em',
    top: '1em',
    fontSize: '0.75em',
    visibility: visibility,
  }))

  if (theme.dark) color = '#fff'
  else color = '#2a2b2d'

  if (size.width >= 100) {
    clickBehavior = theme.toggleDark
    visibility = 'visible'
  } else {
    clickBehavior = null
    visibility = 'hidden'
  }

  return (
    <ToggleButton color={color} onClick={clickBehavior} visibility={visibility}>
      {theme.dark ? (
        <span>
          Light mode <Emoji symbol="🌞" label="sun" />
        </span>
      ) : (
        <span>
          Dark mode <Emoji symbol="🌜" label="moon" />
        </span>
      )}
    </ToggleButton>
  )
})

const Header = () => (
  <ThemeContext.Consumer>
    {theme => (
      <header>
        <div>
          <DarkModeToggler theme={theme} />
        </div>
      </header>
    )}
  </ThemeContext.Consumer>
)

export default Header
