import React from 'react'
import { themes } from '../context/theme-context'
import styled from '@emotion/styled'
import Emoji from 'a11y-react-emoji'

const DarkModeToggler = styled.button(({ theme }) => ({
  ...theme,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  position: 'fixed',
  right: '24px',
  top: '16px',
  fontSize: '0.75em',
}))

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <DarkModeToggler
            theme={this.props.themeContext.theme}
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
