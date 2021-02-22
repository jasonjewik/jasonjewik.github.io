import React from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { ThemeContext, ThemeProvider } from './src/context/theme-context'

const WrapperDiv = styled.div(({ theme, toggleCount }) => ({
  color: theme.color,
  backgroundColor: theme.backgroundColor,
  transition: toggleCount > 0 && theme.transition,
  width: '100vw',
  minHeight: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
}))

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme, toggleCount }) => (
        <WrapperDiv theme={theme} toggleCount={toggleCount}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Jason Jewik</title>
            <meta
              name="description"
              content="
              CS @ UCLA. Interested in AI and using it for mitigating and
              adapting to the climate crisis. 🤖🌱 He/him."
            />
          </Helmet>
          {element}
        </WrapperDiv>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
)
