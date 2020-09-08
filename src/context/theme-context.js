import React from 'react'

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    let currentHour = new Date().getHours()
    let isNight = currentHour < 7 || currentHour >= 18

    this.timeChecker = setInterval(() => {
      currentHour = new Date().getHours()
      isNight = currentHour < 7 || currentHour >= 18
      this.setState({ dark: isNight })
    }, 3000)

    this.state = {
      dark: isNight,
    }
  }

  toggleDark = () => {
    let dark = !this.state.dark
    this.setState({ dark: dark })
    if (this.timeChecker) {
      clearInterval(this.timeChecker)
      this.timeChecker = 0
    }
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          dark: this.state.dark,
          toggleDark: this.toggleDark,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export { ThemeContext, ThemeProvider }
