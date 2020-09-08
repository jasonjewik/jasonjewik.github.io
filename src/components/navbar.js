import React from 'react'
import Emoji from 'a11y-react-emoji'
import { Link } from 'gatsby'

import { isMobile, withOrientationChange } from 'react-device-detect'

const spacing = {
  marginLeft: '0.5em',
  fontSize: '0.8em',
}

const NavItem = ({ children, destination }) => {
  return (
    <Link
      to={destination}
      style={{ ...spacing, color: 'inherit', backgroundImage: 'none' }}
    >
      {children}
    </Link>
  )
}

const Separator = () => {
  return <div style={spacing}>/</div>
}

const BarDiv = ({ isPortrait, children }) => {
  let width = '60%'
  let justify = 'flex-end'

  if (isMobile && isPortrait) {
    width = '85%'
    justify = 'center'
  }

  return (
    <div
      style={{
        width: width,
        margin: 'auto',
        marginTop: '7vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  )
}

const OrientedBarDiv = withOrientationChange(BarDiv)

const Navbar = () => {
  return (
    <OrientedBarDiv>
      <NavItem destination="/">
        <Emoji symbol="🏠" /> HOME
      </NavItem>
      <Separator />
      <NavItem destination="/blog/">
        <Emoji symbol="💬" /> BLOG
      </NavItem>
      <Separator />
      <NavItem destination="/projects/">
        <Emoji symbol="👨‍💻" /> PROJECTS
      </NavItem>
    </OrientedBarDiv>
  )
}

export default Navbar
