import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
import '../styles/global.css'

fairyGatesTheme.overrideThemeStyles = () => ({
  html: {
    fontSize: '2.75vmin',
    overflowX: 'hidden',
    backgroundColor: 'var(--bg)',
    color: 'var(--color)',
    transition: 'var(--transition)',
  },
  h1: {
    color: 'inherit',
  },
  h2: {
    color: 'inherit',
  },
  h3: {
    color: 'inherit',
  },
  h4: {
    color: 'inherit',
  },
  h5: {
    color: 'inherit',
  },
  a: {
    textShadow: 'none',
  },
})

const typography = new Typography(fairyGatesTheme)

export default typography
