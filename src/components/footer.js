import React from 'react'
import styled from '@emotion/styled'
import Emoji from 'a11y-react-emoji'

const StyledFooterText = styled.footer({
  minWidth: '80%',
  textAlign: 'center',
  margin: 'auto',
  marginTop: '2rem',
  marginBottom: '1rem',
})

const Footer = () => (
  <StyledFooterText>
    © {new Date().getFullYear()} Jason Jewik. Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    {` `}
    and made with <Emoji symbol="💕" label="love" />.
  </StyledFooterText>
)

export default Footer
