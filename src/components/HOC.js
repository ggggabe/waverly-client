import React from 'react'

export const useDraggable = Component => {
  return (props => (
    <div className="draggable">
      <Component {...props} />
    </div>
  ))
}