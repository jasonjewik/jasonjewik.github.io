import React from 'react'

export function ColoredText({ color, children }) {
  return <span style={{ color }}>{children}</span>
}

export default ColoredText
