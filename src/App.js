import React, {useState} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import UserKit from './data/UserKit'

export default function App() {
  const userKit = new UserKit()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [organisationName, setOrganisationName] = useState("")
  const [organisationKind, setOrganisationKind] = useState("")

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const history = useHistory()
  const searchString = history.location.search
  const urlParameters = new URLSearchParams(searchString)

  const [uid, setUid] = useState(urlParameters.get('uid'))
  const [token, setToken] = useState(urlParameters.get('token'))
  
  function handleActivateUser(){
    userKit.arctivateUser(uid, token)
    //  så fort användaren är registrerad så vill vi navigera användaren är klar
    .then( () => {
      setUid(null)
      setToken(null)
      history.push('/login')
    })
  }

  function handleLogin(){
    userKit.login(loginEmail, loginPassword)
    .then(res => res.json())
    .then( data => {
      userKit.setToken(data.token);
      history.push("/home")
    })
  }

  function handleRegister() {
    userKit.register(
      firstName, 
      lastName, 
      email, 
      password, 
      organisationName, 
      organisationKind);
  }

  function renderInput(index, placeholder, stateVariable, stateSetVariable){
    return(
      <div key={index}>
        <label>{placeholder}: </label>
        <input 
          placeholder={placeholder} 
          value={stateVariable} 
          onChange={ 
            (e) => stateSetVariable(e.target.value) 
          }
        />
      </div>
    )
  }

  function getCustomerList(){
    userKit.getCustomerList()
    .then(res => res.json())
    .then( data => {
      console.log(data);
      
    })
  }

  const inputObjects = [
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0, 1, 2)", organisationKind, setOrganisationKind]
  ]

  return (
  <div>
    <h1>Business Project</h1>
    <Switch>

      <Route path="/home">
        <div>
          <h2>Home</h2>
          <button onClick={getCustomerList}>Get customers</button>
        </div>
      </Route>

      <Route path="/login">
        {uid && token ? (
          <div>
            {/* visa ifall man har uid och token i url:en annars login */}
            <h2>Activate Account</h2>
            <button onClick={handleActivateUser}>Activate User</button>
          </div>

        ):(
          <div>
            <h2>Login</h2>
            <input placeholder="Email" 
                  value={loginEmail} 
                  onChange={ (e) => setLoginEmail(e.target.value)} />
            <input placeholder="Password" 
                  value={loginPassword} 
                  onChange={ (e) => setLoginPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </div>
        )
        }
      </Route>

      <Route path="/">
        <h1>Business Project</h1>
        <h2>Register</h2>
        <p>Enter details to register:</p>
        {inputObjects.map((inputItem, index)=>{
          return renderInput(index, inputItem[0], inputItem[1], inputItem[2])
        })}
        <button onClick={handleRegister}>Register</button>
      </Route>
      
    </Switch>
  </div>
  )
}
