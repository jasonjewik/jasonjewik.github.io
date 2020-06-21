import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
const timeout = 300
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
    transform: 'scale(1.1)',
  },
  entered: {
    opacity: 1,
    transform: 'scale(1)',
    transition: `opacity ${timeout}ms, transform ${timeout}ms`,
  },
  exiting: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: `opacity ${timeout}ms, transform ${timeout}ms`,
  },
}
class Transition extends React.Component {
  render() {
    const { children, location } = this.props
    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}
export default Transition
