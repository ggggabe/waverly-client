import React from 'react'

export const useDraggable = Component => {
  return (props => (
    <div className="draggable">
      <Component {...props} />
    </div>
  ))
}

export const useSwitchContainer = (FromComponent, ToComponent, condition) => props => {
  return condition(props) ? <ToComponent {...props} /> : <FromComponent {...props} />
}