import React from 'react'
import Emoji from 'a11y-react-emoji'

const Footer = ({ isPortrait }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="links"
      style={{
        marginTop: isPortrait ? '1rem' : '2rem',
        marginBottom: '1rem',
      }}
    >
      {' '}
      <div
        style={{
          minWidth: '80%',
          marginRight: isPortrait ? 'auto' : '1rem',
          textAlign: isPortrait ? 'center' : 'right',
          fontSize: '0.75em',
        }}
      >
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
