import React from 'react'
import './scss/SandBox.scss'
import * as AllComponents from '../components'

const SandBoxHeader = props => {
  return (
    <div className="header">
      <h1>SandBox Header</h1>
    </div>
  )
}
const SandBox = props => {
  console.log({ List: { ...AllComponents } })

  return (
    <div className="content container">
    </div>
  )
}

export const SandBoxContainer = props => {
  return (
    <div className="container centered sandbox">
      <div className=" content">
        <SandBoxHeader />
        <SandBox></SandBox>
      </div>
    </div>
  )
}