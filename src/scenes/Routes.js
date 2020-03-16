import React from 'react'
import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'
import { NavBar } from '../components'
import { SandBoxContainer } from '.'
import { KanBanScene } from './KanBan'
import { LandingPage } from './LandingPage'


export const Routes = () => {
  const props = {
    routes: [
      {
        path: '/nicetodo',
        label: 'Nice To Do',
        style: { width: 100 },
        component: KanBanScene
      },
      // { path: '/sandbox', label: 'sandbox', component: SandBoxContainer },
      {
        path: '/waverly',

        label: 'Waverly Works',
        style: { width: 140 },
        component: LandingPage
      }
    ]
  }

  return (
    <Router className="router">
      <NavBar {...props}></NavBar>


    </Router >
  )
}