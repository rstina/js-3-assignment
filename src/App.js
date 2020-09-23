import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Main } from './style.js';
import Header from './components/Header'
import Button from './components/Button'
import CustomerDetail from './pages/CustomerDetail'

export default function App() {
  return (
  <Main>

      <Switch>

        <Route path="/customer-detail/:id" render={ props => {
          return (
            <Header>
              <CustomerDetail {...props} />
            </Header>
          )}}>
        </Route>

        <Route path="/home">
          <Header>
            <Home />
          </Header>
        </Route>

        <Route path="/login">
          <Header>
            <Login />
          </Header>
        </Route>

        <Route path="/register">
          <Header>
            <Register />
          </Header>
        </Route>

        <Route path="/">
          <Header>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </Header>
        </Route>
        
      </Switch>
  </Main>
  )
}
