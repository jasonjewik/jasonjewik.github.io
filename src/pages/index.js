import React from 'react'
import Emoji from 'a11y-react-emoji'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import BlogPreview from '../components/blog-preview'
import { withOrientationChange } from 'react-device-detect'
import SEO from '../components/seo'

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
      <Emoji symbol="👋" label="hand-wave" />
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

const IndexPage = ({ isPortrait }) => {
  return (
    <>
      <SEO title={'Jason Jewik | Home'} />
      <h1>
        {!isPortrait && <AnimatedHandWave />}
        {!isPortrait && ' '}
        <span>Hello there!</span>
      </h1>
      <h2>
        I'm a computer science undergrad at UCLA interested in machine learning,
        and how we can use it to tackle the climate crisis.
        <br />
        <br />I also think about the deployment of unethical AI, equalizing
        access to computer science education and increasing diversity within the
        tech community.
      </h2>
      <div style={{ marginTop: '1rem' }}>
        -----
        <br />
        If you'd like to say hi, please send an email to jason DOT jewik AT
        gmail, or find me in any of these places:{' '}
        <a href="https://www.linkedin.com/in/jasonjewik">LinkedIn</a>,{' '}
        <a href="https://www.github.com/jasonjewik">GitHub</a>,{' '}
        <a href="https://www.twitter.com/jasonjewik">Twitter</a>,{' '}
        <a href="https://jasonjewik.medium.com">Medium</a>. My CV can be found{' '}
        <a
          href="https://drive.google.com/file/d/1XuZT7ODuNWFld6jAuGG6bZXdd9mQem2J/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </div>
      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
        P.S. If you know why the handwave emoji above is transparent, please let
        me know. It used to be in color and I don't know when or how it stopped
        being in color.
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
          A collaboration betwen ACM AI and ACM Teach LA to produce
          presentations on AI ethics. I helped create the slides on predictive
          policing.
        </p>
        <a href="https://teachla.uclaacm.com/classes/ml">
          <h2>Introduction to AI & ML</h2>
        </a>
        <p>
          Another collaboration between ACM AI and ACM Teach LA. As a member of
          the ACM AI Outreach team, I helped develop the curriculum and teach
          the classes. We aimed to introduce important concepts such as linear
          regression, Bayes Theorem, and gradient descent.
        </p>
        <a href="https://youtu.be/G6YvE_gZ-n0">
          <h2>sustAInable: ML x Climate Change</h2>
        </a>
        <p>
          A collaboration between ACM AI and ACM Impact. This was a forum where
          attendees could discuss ways machine learning can address issues
          related to climate change. The slides were based on the paper put out
          by Climate Change AI.
        </p>
      </div>

      <PageBreak />

      <h1>My Recent Reads</h1>
      <div>
        <ul>
          <li>
            <strong>Fermat's Last Theorem</strong> by Simon Singh
          </li>
          <li>
            <strong>
              Blockchain Chicken Farm: And Other Stories of Tech in China's
              Countryside
            </strong>{' '}
            by Xiaowei Wang
          </li>
          <li>
            <strong>Meditations</strong> by Marcus Aurelius
          </li>
          <li>
            <strong>Less is More: How Degrowth Will Save the World</strong> by
            Jason Hickel
          </li>
          <li>
            <strong>The Socrates Express</strong> by Eric Weiner
          </li>
        </ul>
        <span>
          <em>
            I'm always looking for recommendations for what to read next. If
            you've got a book in mind, please send it my way!
          </em>
        </span>
      </div>

      <PageBreak />
    </>
  )
}

export default withOrientationChange(IndexPage)
