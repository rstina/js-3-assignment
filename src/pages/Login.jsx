import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { UserContext} from '../contexts/UserContext'
import UserKit from '../data/UserKit'
import Button from '../components/Button';
import { Input, FormWrapper, ErrorText, MainSection, Label } from '../style.js';

export default function Login() {
  const userKit = new UserKit()
  const { setUserInfo } = useContext(UserContext) 
  const { handleSubmit, register, errors } = useForm()

  const history = useHistory()
  const searchString = history.location.search
  const urlParameters = new URLSearchParams(searchString)

  const [uid, setUid] = useState(urlParameters.get('uid'))
  const [token, setToken] = useState(urlParameters.get('token'))
  const [incorrectValues, setIncorrectValues] = useState(null)

  function handleActivateUser(){
    userKit.logout()
    userKit.arctivateUser(uid, token)
    .then( () => {
      setUid(null)
      setToken(null)
      history.push('/login')
    })
  }

  const handleLoginOnSubmit = (values) => {   
    userKit.login(values.loginEmail, values.loginPassword)
    .then(res => res.json())
    .then( data => {
      if(data.token !== undefined){
        userKit.setToken(data.token)
        userKit.getClientInfo()
        .then(res => res.json())
        .then(data => {
          setUserInfo(data) 
        })
        history.push("/home")
      } else if (data.token === undefined) {
        setIncorrectValues("Inorrect email or password")
      }
    })
  }

  return (
    <MainSection>
      {uid && token ? (
        <div>
          <h2>Activate Account</h2>
          <Button onClick={handleActivateUser}>Activate User</Button>
        </div>
      ):(
        <FormWrapper onSubmit={handleSubmit(handleLoginOnSubmit)}>
          <h2>Login</h2>

          <Label htmlFor="loginEmail">Email:</Label>
          <Input
            name="loginEmail"
            placeholder="Email"
            ref={register({
              required: "Required",
              maxLength: {value: 254, message: "To long"},
              minLength: { value: 1 },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email"
              }
            })}
          />
          {errors.loginEmail && <ErrorText>{errors.loginEmail.message}</ErrorText>}
          {incorrectValues && <ErrorText>{incorrectValues}</ErrorText>}

          <Label htmlFor="loginPassword">Password:</Label>
          <Input  
            type="password" 
            name="loginPassword" 
            placeholder="Password" 
            ref={register({
              required: "Required",
              maxLength: { value: 50, message: "To long"},
              minLength: {value: 8, message: "Must be at least 8 characters"},
              pattern: {
                value: /^[a-zA-Z0-9-_%&?!.,]+$/i,
                message: "Invalid Password Format"
              }
            })}
          />
          {errors.loginPassword && <ErrorText>{errors.loginPassword.message}</ErrorText>}
          {incorrectValues && <ErrorText>{incorrectValues}</ErrorText>}

          <Button type="submit">Login</Button>
        </FormWrapper>
      )
    }
    </MainSection>
  )
}
