import React from 'react'
import styled from '@emotion/styled'
import { ThemeContext, ThemeProvider } from './src/context/theme-context'

const WrapperDiv = styled.div(({ theme }) => ({
  color: theme.color,
  backgroundColor: theme.backgroundColor,
  transition: theme.toggleCount > 0 ? theme.transition : 'none',
  width: '100vw',
  minHeight: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
}))

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => <WrapperDiv theme={theme}>{element}</WrapperDiv>}
    </ThemeContext.Consumer>
  </ThemeProvider>
)
