import React from 'react'

function IndentedBlock({ children }) {
  return (
    <p
      style={{
        marginTop: '-1rem',
        marginLeft: '2rem',
        marginBottom: '0.5rem',
      }}
    >
      {children}
    </p>
  )
}

function HangingIndent({ children }) {
  return (
    <p
      style={{
        textIndent: '-1.5rem',
        marginLeft: '1.5rem',
        marginBottom: '0.45rem',
      }}
    >
      {children}
    </p>
  )
}

const WorksCited = ({ children }) => (
  <>
    {children.map(child => (
      <HangingIndent>{child}</HangingIndent>
    ))}
  </>
)

export { IndentedBlock, WorksCited }
