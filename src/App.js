import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Main } from './style.js';

export default function App() {

  return (
  <Main>

    <h1>Business Project</h1>
    <Switch>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </Route>
      
    </Switch>
  </Main>
  )
}
