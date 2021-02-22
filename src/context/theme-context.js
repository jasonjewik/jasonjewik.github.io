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
  theme: themes.light,
  toggleCount: 0,
  toggleTheme: () => {},
}

const nightState = {
  theme: themes.dark,
  toggleCount: 0,
  toggleTheme: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState

    let currentHour = new Date().getHours()
    let isNight = currentHour < 7 || currentHour >= 18
    if (isNight) this.state = nightState
    else this.state = defaultState
  }

  toggleTheme = () => {
    let newTheme = themes.dark
    if (this.state.theme === themes.dark) newTheme = themes.light
    let toggleCount = this.state.toggleCount + 1
    this.setState({ theme: newTheme, toggleCount: toggleCount })
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
