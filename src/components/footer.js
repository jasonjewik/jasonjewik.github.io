import React from 'react'
import Emoji from 'a11y-react-emoji'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="links" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      {' '}
      <div style={{ minWidth: '80%', textAlign: 'center' }}>
        © {currentYear} Jason Jewik. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}
        and made with <Emoji symbol="💕" label="love" />.
      </div>
    </footer>
  )
}

export default Footer
