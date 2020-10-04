import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../context/theme-context'
import Header from '../components/header'
import Footer from '../components/footer'
import Transition from '../components/transition'

import { isMobile, withOrientationChange } from 'react-device-detect'

const ContentWrapper = ({ isPortrait, children }) => {
  let width = '65%'
  let marginTop = '6rem'

  if (isMobile && isPortrait) width = '85%'
  if (isMobile && isPortrait) marginTop = '3rem'

  return (
    <div
      style={{
        margin: 'auto',
        marginTop: marginTop,
        width: width,
      }}
    >
      {children}
    </div>
  )
}

const OrientedContentWrapper = withOrientationChange(ContentWrapper)

const Layout = ({ children, location }) => {
  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <>
          {!isMobile && <Header themeContext={themeContext} />}
          <Transition location={location}>
            <OrientedContentWrapper>
              {children}
              <Footer themeContext={themeContext} />
            </OrientedContentWrapper>
          </Transition>
        </>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
