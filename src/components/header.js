import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Emoji from 'a11y-react-emoji'

class Header extends React.Component {
  render() {
    return (
      <header>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <button
                style={{
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  right: '24px',
                  top: '16px',
                  position: 'absolute',
                  fontSize: '0.75em',
                  backgroundColor: 'var(--bg)',
                  color: 'var(--color)',
                }}
                onMouseUp={e => {
                  toggleTheme(theme === 'dark' ? 'light' : 'dark')
                }}
              >
                {theme === 'dark' ? (
                  <span>
                    Light mode <Emoji symbol="🌞" label="sun" />
                  </span>
                ) : (
                  <span>
                    Dark mode <Emoji symbol="🌜" label="moon" />
                  </span>
                )}
              </button>
            </label>
          )}
        </ThemeToggler>
      </header>
    )
  }
}

export default Header
