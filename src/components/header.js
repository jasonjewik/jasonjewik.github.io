import React from 'react'
import { themes } from '../context/theme-context'
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

class Header extends React.Component {
  constructor(props) {
    super(props)
    let currentHour = new Date().getHours()
    let isNight = currentHour < 7 || currentHour >= 18
    if (isNight) props.themeContext.setInitTheme(themes.dark)
    else props.themeContext.setInitTheme(themes.light)
  }

  render() {
    return (
      <header>
        <div>
          <DarkModeToggler
            color={this.props.themeContext.theme.color}
            onClick={this.props.themeContext.toggleTheme}
          >
            {this.props.themeContext.theme === themes.dark ? (
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
    )
  }
}

export default Header
