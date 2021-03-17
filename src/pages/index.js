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
      I'm a CS undergrad at UCLA interested in machine learning, and how we can
      use it to tackle the{' '}
      <A
        href="https://www.notion.so/Climate-Change-x-Tech-Stuff-bc893706198f43da85d15d9a82de4459"
        title="A Notion page full of links I update from time to time"
      >
        <ColoredText color="#2d7dae">climate crisis</ColoredText>.
      </A>
      <br />
      <br />I also think about the deployment of unethical AI, equalizing access
      to CS education and increasing diversity within the tech community.
    </h2>
    <div style={{ marginTop: '1rem' }}>
      -----
      <br />
      If you'd like to say hi or request a resume, please send me a message
      through this{' '}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfByDsfHJ2W9DPQo6oi1zs9jDwPw5D8CrEee9z9IPMijCHiLw/viewform?usp=sf_link">
        contact form
      </a>
      , or find me in any of these places:{' '}
      <a href="https://www.linkedin.com/in/jasonjewik">LinkedIn</a>,{' '}
      <a href="https://www.github.com/jasonjewik">GitHub</a>,{' '}
      <a href="https://www.twitter.com/jasonjewik">Twitter</a>,{' '}
      <a href="https://www.medium.com/@jasonjewik">Medium</a>.
    </div>

    <PageBreak />

    <BlogPreview />

    <PageBreak />

    <h1>Some Things I've Done</h1>
    <div>
      <a href="https://teachla.uclaacm.com/ai-ethics">
        <h2>Unethical AI: Predictive Policing</h2>
      </a>
      <p>
        A collaboration betwen ACM AI and ACM Teach LA to produce presentations
        on AI ethics. I helped create the slides on predictive policing.
      </p>
      <a href="https://teachla.uclaacm.com/classes/ml">
        <h2>Introduction to AI & ML</h2>
      </a>
      <p>
        Another collaboration between ACM AI and ACM Teach LA. As a member of
        the ACM AI Outreach team, I helped develop the curriculum and teach the
        classes. We aimed to introduce important concepts such as linear
        regression, Bayes Theorem, and gradient descent.
      </p>
      <a href="https://youtu.be/G6YvE_gZ-n0">
        <h2>sustAInable: ML x Climate Change</h2>
      </a>
      <p>
        A collaboration between ACM AI and ACM Impact. This was a forum where
        attendees could discuss ways machine learning can address issues related
        to climate change. The slides were based on the paper put out by Climate
        Change AI.
      </p>
    </div>

    <PageBreak />

    <h1>My Recent Reads</h1>
    <div>
      <ul>
        <li>"Discourses and Selected Writings" by Epictetus</li>
        <li>
          "Alien Oceans: The Search for Life in the Depths of Space" by Kevin
          Hand
        </li>
        <li>"Weapons of Math Destruction" by Cathy O'Neil</li>
        <li>
          "The Uninhabitable Earth: Life After Warming" by David Wallace-Wells
        </li>
        <li>
          "Human Compatible: Artificial Intelligence and the Problem of Control"
          by Stuart Russell
        </li>
      </ul>
    </div>

    <PageBreak />
  </>
)

export default IndexPage
