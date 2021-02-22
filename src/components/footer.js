import React from 'react'
import Emoji from 'a11y-react-emoji'
import Logos from './sm-logos'

const Footer = ({ themeContext }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="links" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
      {' '}
      <div style={{ minWidth: '80%', textAlign: 'center' }}>
        © {currentYear} Jason Jewik. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}
        and made with <Emoji symbol="💕" label="love" />.
      </div>
      <Logos themeContext={themeContext} />
    </footer>
  )
}

export default Footer
