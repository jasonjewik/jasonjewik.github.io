import React from 'react'
import Emoji from 'a11y-react-emoji'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { withSize } from 'react-sizeme'

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

const Navbar = ({ size }) => {
  let justify
  if (size.width < 420) justify = 'center'
  else justify = 'flex-end'

  const BarDiv = styled.div({
    width: '85%',
    maxWidth: '890px',
    margin: 'auto',
    marginTop: '7vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: justify,
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

export default withSize()(Navbar)
