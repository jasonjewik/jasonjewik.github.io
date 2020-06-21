import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Transition from '../components/transition'

const ContentWrapper = styled.div({
  margin: 'auto',
  width: '60%',
})

const Layout = ({ children, location }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Transition location={location}>
        <ContentWrapper>
          {children}
          <Footer />
        </ContentWrapper>
      </Transition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
