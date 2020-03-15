import React, { useState } from 'react'
import WindowHeader from './WindowHeader'
import WindowBody from './WindowBody'
import './index.scss'

export default ({ title = '', scene, sceneProps, options, className }) => {
  const props = {
    title,
    scene: scene || null,
    sceneProps
  }

  const { headerOptions = {}, bodyOptions = {} } = options || {}
  const [collapsed, setCollapsed] = useState(false)

  const collapse = () => setCollapsed(!collapsed)
  const classes = `${className} container centered window ${collapsed ? 'collapsed' : ''}`


  return (
    <div className={classes} onClick={() => {
      if (headerOptions.collapsable) collapse(collapsed)
    }}>
      <WindowHeader title={title} options={headerOptions} />
      <WindowBody {...props}></WindowBody>
    </div>
  )
}