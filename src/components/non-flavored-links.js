import React from 'react'

const A = ({ href, title, children }) => {
  return (
    <a
      style={{ color: 'inherit', backgroundImage: 'none' }}
      href={href}
      title={title || ''}
    >
      {children}
    </a>
  )
}

export default A
