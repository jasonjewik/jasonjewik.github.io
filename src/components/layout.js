import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'

const ContentWrapper = styled.div({
  margin: 'auto',
  marginTop: '7vh',
  width: '60%',
})

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Navbar />
        {children}
        <Footer />
      </ContentWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
