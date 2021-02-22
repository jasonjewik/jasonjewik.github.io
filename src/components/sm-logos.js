import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { themes } from '../context/theme-context'
import Img from 'gatsby-image'
import A from './non-flavored-links'

const Logos = ({ themeContext }) => {
  const data = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: { eq: "LI-In-Bug-cropped.png" }) {
        childImageSharp {
          fluid(fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      githubDark: file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
        childImageSharp {
          fluid(fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      githubLight: file(relativePath: { eq: "GitHub-Mark-Light-64px.png" }) {
        childImageSharp {
          fluid(fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medium: file(relativePath: { eq: "Monogram.png" }) {
        childImageSharp {
          fluid(fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitterLight: file(
        relativePath: { eq: "Twitter_Social_Icon_Rounded_Square_Color.png" }
      ) {
        childImageSharp {
          fluid(fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitterDark: file(
        relativePath: { eq: "Twitter_Social_Icon_Rounded_Square_White.png" }
      ) {
        childImageSharp {
          fluid(fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const LogoDiv = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  })

  const Logo = ({ fluid, href }) => (
    <div
      style={{
        width: '1.5rem',
        height: '1.5rem',
        margin: '0.75rem'
      }}
    >
      <A href={href}>
        <Img fluid={fluid} />
      </A>
    </div>
  )

  return (
    <LogoDiv>
      <Logo
        fluid={data.linkedin.childImageSharp.fluid}
        href="https://linkedin.com/in/jasonjewik"
      />
      {themeContext.theme === themes.dark && (
        <Logo
          fluid={data.githubLight.childImageSharp.fluid}
          href="https://github.com/jasonjewik"
        />
      )}
      {themeContext.theme === themes.light && (
        <Logo
          fluid={data.githubDark.childImageSharp.fluid}
          href="https://github.com/jasonjewik"
        />
      )}
      <Logo
        fluid={data.medium.childImageSharp.fluid}
        href="https://medium.com/@jasonjewik"
      />
      {themeContext.theme === themes.dark && (
        <Logo
          fluid={data.twitterDark.childImageSharp.fluid}
          href="https://twitter.com/jasonjewik"
        />
      )}
      {themeContext.theme === themes.light && (
        <Logo
          fluid={data.twitterLight.childImageSharp.fluid}
          href="https://twitter.com/jasonjewik"
        />
      )}
    </LogoDiv>
  )
}

export default Logos
