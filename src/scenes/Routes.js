import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { NavBar } from '../components'
import { SandBoxContainer } from '.'
import { KanBanScene } from './KanBan'
import { LandingPage } from './LandingPage'


export const Routes = () => {
  const props = {
    routes: [
      {
        path: '/todo',
        label: 'projects',
        component: KanBanScene
      },
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