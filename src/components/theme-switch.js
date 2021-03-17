import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Emoji from 'a11y-react-emoji'

const ThemeSwitch = ({ isPortrait }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label
          style={{
            right: '0px',
            padding: '5px',
            paddingRight: '24px',
            top: '16px',
            position: 'fixed',
            fontSize: isPortrait ? '1em' : '0.75em',
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
            backgroundColor: theme === 'light' ? '#202020' : '#ffffff', // taken from global.css
            opacity: isPortrait ? 0.75 : 1,
          }}
        >
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
            style={{ visibility: 'hidden' }}
          />
          {theme === 'light' ? (
            <span style={{ color: '#f0ead6' }}>
              {!isPortrait && 'Dark mode'} <Emoji symbol="🌜" label="moon" />
            </span>
          ) : (
            <span style={{ color: 'black' }}>
              {!isPortrait && 'Light mode'} <Emoji symbol="🌞" label="sun" />
            </span>
          )}
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeSwitch
