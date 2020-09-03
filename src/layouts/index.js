import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Transition from '../components/transition'

import { isMobile, withOrientationChange } from 'react-device-detect'

const ContentWrapper = ({ isPortrait, children }) => {
  let width = '65%'
  if (isMobile && isPortrait) width = '85%'

  return (
    <div
      style={{
        margin: 'auto',
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
    <>
      {!isMobile && <Header />}
      <Navbar />
      <Transition location={location}>
        <OrientedContentWrapper>
          {children}
          <Footer />
        </OrientedContentWrapper>
      </Transition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
