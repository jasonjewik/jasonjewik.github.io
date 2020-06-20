import React from 'react'

import { ThemeProvider } from './src/context/theme-context'

export const wrapRootElement = ({ element }) => (
  <div
    style={{
      width: '100vw',
      minHeight: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
    }}
  >
    <ThemeProvider>{element}</ThemeProvider>
  </div>
)
