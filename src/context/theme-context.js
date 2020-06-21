import React from 'react'

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    dark: false,
  }

  toggleDark = () => {
    let dark = !this.state.dark
    this.setState({ dark })
  }

  componentDidMount() {
    const currentHour = new Date().getHours()
    const isNight = currentHour < 7 || currentHour >= 19
    this.setState({ dark: isNight })
  }

  render() {
    const { children } = this.props
    const { dark } = this.state

    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext
export { ThemeProvider }
