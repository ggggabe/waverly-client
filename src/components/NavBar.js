import React from 'react'
import {
  Link,
  Switch,
  Route
} from 'react-router-dom'
import './scss/navbar.scss'

const Routing = ({ routes }) => (
  <Switch>
    {routes.map((route, key) => <Route key={key} {...route} />)}
  </Switch>
)

const RouteList = ({ routes }) => (
  <ul className='navbar'>
    {routes.map(({ path, label, style }, key) => (
      <li className='navitem hover-text' key={key}><Link to={path}><p style={style}>{label}</p></Link>
      </li>
    ))}
  </ul>
)

export const NavBar = ({ routes }) => {
  const props = {
    routes
  }
  return <div className='fullscreen centered'>
    <nav className=''>
      <RouteList {...props}></RouteList>
    </nav>
    <Routing {...props}></Routing>
  </div>
}
