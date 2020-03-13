import React from 'react'
import {
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { PropsLog } from './HUD'
import './scss/navbar.scss'

const Routing = ({ routes }) => (
  <Switch>
    {routes.map((route, key) => <Route key={key} {...route} />)}
  </Switch>
)

const RouteList = ({ routes }) => (
  <ul className='navbar'>
    {routes.map(({ path, label }, key) => (
      <li className='navitem' key={key}><Link to={path}>{label}</Link>
      </li>
    ))}
  </ul>
)

export const NavBar = ({ routes }) => {
  const props = {
    routes
  }
  return <div>
    <nav >
      <RouteList {...props}></RouteList>
      <Routing {...props}></Routing>
    </nav>
  </div>
}