import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'
import { FormLogin } from '../style.js';
// import Button from '../components/Button';
// import {Input} from '../style'

export default function Register() {
  const userKit = new UserKit()
  const history = useHistory()

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
      history.push('/login')
  }

  function renderInput(index, placeholder, stateVariable, stateSetVariable){
    return(
      <div key={index}>
        <label>{placeholder}: </label><br/>
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
  const inputObjects = [
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0, 1, 2)", organisationKind, setOrganisationKind]
  ]

  return (
      <FormLogin>
        <h2>Register</h2>
        {inputObjects.map((inputItem, index)=>{
          return renderInput(index, inputItem[0], inputItem[1], inputItem[2])
        })}
        <button onClick={handleRegister}>Register</button>
      </FormLogin>
  )
}
