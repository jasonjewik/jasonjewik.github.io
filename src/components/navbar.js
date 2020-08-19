import React from 'react'
import Emoji from 'a11y-react-emoji'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

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

const Navbar = () => {
  const BarDiv = styled.div({
    width: '60%',
    margin: 'auto',
    marginTop: '7vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  })

  return (
    <BarDiv>
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
    </BarDiv>
  )
}

export default Navbar
