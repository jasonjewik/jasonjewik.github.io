import React from 'react'
import Emoji from 'a11y-react-emoji'
import styled from '@emotion/styled'

const spacing = {
  marginLeft: '0.5em',
  fontSize: '0.8em',
}

const NavItem = ({ children }) => {
  return <div style={{ ...spacing, cursor: 'pointer' }}>{children}</div>
}

const Separator = () => {
  return <div style={spacing}>/</div>
}

const Navbar = () => {
  const BarDiv = styled.div({
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  })

  return (
    <BarDiv>
      <NavItem>
        <Emoji symbol="🏠" /> HOME
      </NavItem>
      <Separator />
      <NavItem>
        <Emoji symbol="💬" /> BLOG
      </NavItem>
      <Separator />
      <NavItem>
        <Emoji symbol="👨‍💻" /> PROJECTS
      </NavItem>
    </BarDiv>
  )
}

export default Navbar
