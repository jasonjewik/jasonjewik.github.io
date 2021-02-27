import React from 'react'
import { window } from 'browser-monads'

const themes = {
  dark: {
    backgroundColor: '#202020',
    color: '#f0ead6',
    transition: 'all 0.6s ease',
  },
  light: {
    backgroundColor: '#ffffff',
    color: '#000000',
    transition: 'all 0.6s ease',
  },
}

let checkDarkMode =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const defaultState = {
  theme: checkDarkMode ? themes.dark : themes.light,
  manualToggle: false,
  toggleTheme: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState

    this.toggleTheme = () => {
      let newTheme = themes.dark
      if (this.state.theme === themes.dark) newTheme = themes.light
      this.setState({ theme: newTheme, manualToggle: true })
    }
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleCount: this.state.toggleCount,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export { themes, ThemeContext, ThemeProvider }
