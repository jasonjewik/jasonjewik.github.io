import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Header from './header'
import Footer from './footer'

const ContentWrapper = styled.div({
  margin: 'auto',
  width: '50%',
})

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>
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
