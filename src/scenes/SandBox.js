import React, { useEffect } from 'react'
import * as AllComponents from '../components'
import './scss/SandBox.scss'

const WindowHeaderMenu = props => {
  return (
    <div className='menu'>
      <div className="hover-text"><span>File</span></div>
      <div className="hover-text"><span>Edit</span></div>
      <div className="hover-text"><span>View</span></div>
    </div>
  )
}

const WindowHeaderControls = props => {
  return (
    <div className='controls'>
      <div>
        <span>-</span>
      </div>
      <div>
        <span>x</span>
      </div>
    </div>
  )
}
const WindowHeader = props => {
  return (
    <div className="header">
      <WindowHeaderMenu />
      <span className="title">Title of Thing</span>
      <WindowHeaderControls />
    </div>
  )
}
const WindowBody = props => {
  console.log({ List: { ...AllComponents } })

  return (
    <div className="content container">
    </div>
  )
}

export const SandBoxContainer = props => {
  useEffect(() => {
    document.title = 'Waverly - SandBox'
  })

  return (
    <div className="container centered window">
      <WindowHeader />
      <WindowBody></WindowBody>
    </div>
  )
}