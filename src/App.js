import React, {useState, useEffect} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterConfirmation from './pages/RegisterConfirmation'
import CustomerDetailPage from './pages/CustomerDetailPage'
import Header from './components/Header'
import Button from './components/Button'
import UserKit from './data/UserKit'
import { CustomerListContext } from './contexts/CustomerListContext'
import { UserContext } from './contexts/UserContext'
import { Main } from './style.js';

export default function App() {
  const userKit = new UserKit()
  const [customerList, setCustomerList] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
      userKit.getCustomerList()
      .then(res => res.json())
      .then( data => {
        setCustomerList(data.results)
      })
  }, [])

  useEffect(() => {
      userKit.getClientInfo()
      .then(res => res.json())
      .then(data => {
        setUserInfo(data) 
      })
  }, [])

  return (
  <Main>
    <UserContext.Provider value={ {userInfo, setUserInfo} }>
    <CustomerListContext.Provider value={ {customerList, setCustomerList} }>
      <Switch>

        <Route path="/customer-detail/:id" render={ props => {
          return (
            <Header>
              <CustomerDetailPage {...props} />
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

        <Route path="/register-confirmation">
          <Header>
            <RegisterConfirmation />
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
    </CustomerListContext.Provider>
    </UserContext.Provider>
  </Main>
  )
}
