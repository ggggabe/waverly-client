import React, { useEffect, useState } from 'react'
import * as Waverly from '../components'
import { KanBanScene, kanbanStub } from './KanBan'
import Window from '../components/Window'

export const SandBoxContainer = props => {
  useEffect(() => {
    document.title = 'Waverly - SandBox'
  })

  const [title, setTitle] = useState('')

  const setSandboxComponent = (Component, title) => {
    setTitle(title)
  }

  const options = {
    headerOptions: {
    }
  }
  return (
    <Window scene={KanBanScene} sceneProps={kanbanStub} options={options} />
  )
}