import React from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from '../components/theme-switch'
import Footer from '../components/footer'
import Transition from '../components/transition'
import { isMobile, withOrientationChange } from 'react-device-detect'
import './layout.css'

const ContentWrapper = ({ isPortrait, children }) => {
  let width = '50%'
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
const OrientedThemeSwitch = withOrientationChange(ThemeSwitch)
const OrientedFooter = withOrientationChange(Footer)

const Layout = ({ children, location }) => {
  return (
    <>
      <Transition location={location}>
        <OrientedThemeSwitch />
        <OrientedContentWrapper>{children}</OrientedContentWrapper>
        <OrientedFooter />
      </Transition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
