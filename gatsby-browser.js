import React from 'react'
import './src/styles/global.css'

import { ThemeContext, ThemeProvider } from './src/context/theme-context'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {theme => (
        <div
          className={theme.dark ? 'dark' : 'light'}
          style={{
            width: '100vw',
            minHeight: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {element}
        </div>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
)
