import React from 'react'

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

const defaultState = {
  theme:
    (new Date().getHours() >= 7) & (new Date().getHours() < 18)
      ? themes.light
      : themes.dark,
  toggleCount: 0,
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
      let toggleCount = this.state.toggleCount + 1
      this.setState({ theme: newTheme, toggleCount: toggleCount })
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
