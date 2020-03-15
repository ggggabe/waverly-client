import React from 'react'

const WindowHeaderMenu = ({ menu }) => {
  return (
    <div className='menu'>
      {(menu || []).map((menuItem, key) => (
        <div className='hover-text'><span>{menuItem}</span></div>
      ))}

    </div>
  )
}

const WindowHeaderControls = props => {
  return (
    <div className='controls'>
    </div>
  )
}

const WindowHeaderTitle = ({ title }) => {
  return (
    <span className="title">{title}</span>
  )
}

export default ({ title, options }) => {
  const currentOptions = Object.assign({
    menu: []
  }, options)

  return (
    <div className="header">
      <WindowHeaderTitle title={title || 'Untitled'} />

      <WindowHeaderMenu menu={currentOptions.menu} />
      <WindowHeaderControls />
    </div>
  )
}