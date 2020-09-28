import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterConfirmation from './pages/RegisterConfirmation'
import CustomerDetailPage from './pages/CustomerDetailPage'
import Header from './components/Header'
import UserKit from './data/UserKit'
import { CustomerListContext } from './contexts/CustomerListContext'
import { UserContext } from './contexts/UserContext'
import { MainSection } from './style.js';
import Redirect from './components/Redirect'

export default function App() {
  const userKit = new UserKit()
  const [customerList, setCustomerList] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    if(userKit.getToken()){
      userKit.getCustomerList()
      .then(res => res.json())
      .then( data => {
        setCustomerList(data.results)
      })
    }
  }, [])

  useEffect(() => {
    if(userKit.getToken()){
      userKit.getClientInfo()
      .then(res => res.json())
      .then(data => {
        setUserInfo(data) 
      })
    }
  }, [])

  return (
  <div>
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
            <MainSection>
              <Redirect />
            </MainSection>
          </Header>
        </Route>
        
      </Switch>
    </CustomerListContext.Provider>
    </UserContext.Provider>
  </div>
  )
}
