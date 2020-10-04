import React from 'react'
import Emoji from 'a11y-react-emoji'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import ColoredText from '../components/colored-text'
import A from '../components/non-flavored-links'
import BlogPreview from '../components/blog-preview'

import { isMobile } from 'react-device-detect'

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

const PageBreak = styled.div({
  borderTopStyle: 'solid',
  borderTopColor: '#c0c0c0',
  borderTopWidth: '1px',
  width: '75%',
  margin: 'auto',
  marginTop: '2rem',
  marginBottom: '1rem',
})

const IndexPage = () => (
  <>
    <h1>
      {!isMobile && <AnimatedHandWave />}
      {!isMobile && ' '}
      <span>Hello there!</span>
    </h1>
    <h2>
      I'm a computer science undergrad student @ UCLA interested in deep
      learning.
      <br />
      <br />I believe the most pressing issue for AI researchers and engineers
      right now is{' '}
      <A href="" title="No link for this (yet)">
        <ColoredText color="#38ad79">how to use AI ethically</ColoredText>
      </A>
      . I'm also an advocate for{' '}
      <A
        href="https://teachla.uclaacm.com/classes/ml"
        title="I help teach this course!"
      >
        <ColoredText color="#2d7dae">equalizing access</ColoredText>
      </A>{' '}
      to CS education and{' '}
      <A
        href="https://anchor.fm/ucla-acm-ai"
        title="I also edit this podcast about diversity in AI"
      >
        <ColoredText color="#2d7dae">increasing the diversity</ColoredText>
      </A>{' '}
      of our field.
    </h2>
    <div style={{ marginTop: '1rem' }}>
      -----
      <br />
      If you'd like to say hi or request a resume, please send me a message
      through this{' '}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfByDsfHJ2W9DPQo6oi1zs9jDwPw5D8CrEee9z9IPMijCHiLw/viewform?usp=sf_link">
        contact form
      </a>
      . My pronouns are he/him/his.
    </div>

    <PageBreak />

    <BlogPreview />

    <PageBreak />

    <h1>My Recent Reads</h1>
    <div>
      <ul>
        <li>"Weapons of Math Destruction" by Cathy O'Neil</li>
        <li>
          "The Uninhabitable Earth: Life After Warming" by David Wallace-Wells
        </li>
        <li>
          "Human Compatible: Artificial Intelligence and the Problem of Control"
          by Stuart Russell
        </li>
        <li>"Fascism: A Warning" by Madeleine Albright</li>
        <li>"Utopia for Realists" by Rutger Bregman</li>
      </ul>
    </div>

    <PageBreak />
  </>
)

export default IndexPage
