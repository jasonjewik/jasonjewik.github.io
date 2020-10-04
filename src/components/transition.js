import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
const timeout = 300
const getTransitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
    transition: `opacity ${timeout}ms`,
  },
  exiting: {
    opacity: 0,
    transition: `opacity ${timeout}ms`,
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
