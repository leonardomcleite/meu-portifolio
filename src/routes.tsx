import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'

const Routes = () => {
  return (
    <div>
      <Route component={Home} path="/" exact/>
      <Route component={AboutMe} path="/sobre-min" exact/>
    </div>
  )
}

export default Routes