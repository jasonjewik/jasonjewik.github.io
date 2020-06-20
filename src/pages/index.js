import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Emoji from 'a11y-react-emoji'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import ColoredText from '../components/colored-text'

const AnimatedHandWave = () => {
  const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }

  `
  const EmojiDiv = styled.div`
    display: inline-block;
    transform-origin: bottom right;
    animation: ${wave} 2.5s infinite;
  `

  return (
    <EmojiDiv>
      <Emoji symbol="👋" />
    </EmojiDiv>
  )
}

const StyledPrefooter = styled.div({
  borderTopStyle: 'solid',
  borderTopColor: '#c0c0c0',
  borderTopWidth: '1px',
  paddingTop: '4px',
  marginTop: '32px',
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <AnimatedHandWave /> <span>Hello there!</span>
    </h1>
    <h2>
      I'm a computer science undergrad student @ UCLA and aspiring AI scientist
      (or maybe ML engineer, I haven't decided yet).
    </h2>
    <h2>
      I believe in the power of AI for{' '}
      <ColoredText color="#38ad79">social and environmental good</ColoredText>,
      and I'm also an advocate for equalizing{' '}
      <ColoredText color="#2d7dae">access to CS education</ColoredText>.
    </h2>
    <StyledPrefooter>
      If you'd like to say hi or noticed my website looks weird on your device,
      please send me a message through this{' '}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfByDsfHJ2W9DPQo6oi1zs9jDwPw5D8CrEee9z9IPMijCHiLw/viewform?usp=sf_link">
        contact form
      </a>
      .
    </StyledPrefooter>
  </Layout>
)

export default IndexPage
