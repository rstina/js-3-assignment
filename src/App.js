import React, {useState} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import UserKit from './data/UserKit'
import Login from './pages/Login'

export default function App() {
  const userKit = new UserKit()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [organisationName, setOrganisationName] = useState("")
  const [organisationKind, setOrganisationKind] = useState("")

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
        <Login />
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
