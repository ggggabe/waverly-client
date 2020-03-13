import React from 'react'
import './scss/hud.scss'
import { useDraggable } from './HOC'
import { Button } from './Button'

export const PropsLog = useDraggable(({ log, name }) => (
  <div className='hud'>
    <h1>{name}</h1>
    <ul>
      {Object.keys(log).map(key => <li>
        <code className="prop-key">{key}:</code>
        <code className="prop-val">{JSON.stringify(log[key])}</code>
      </li>
      )}
    </ul>
    <Button label="Copy" />
  </div>
))

export const DraggablePropsLog = useDraggable(<PropsLog />)