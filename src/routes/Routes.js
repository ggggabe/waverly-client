import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { NavBar } from '../components'
import { LandingPage, SandBoxContainer } from '.'

export const Routes = () => {
  const props = {
    routes: [
      { path: '/sandbox', label: 'sandbox', component: SandBoxContainer },
      { path: '/', label: 'home', component: LandingPage }
    ]
  }

  return (
    <Router className="router">
      <NavBar {...props}></NavBar>
    </Router>
  )
}