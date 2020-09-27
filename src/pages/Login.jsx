import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'
import { UserContext} from '../contexts/UserContext'
import { Input, FormLogin, ErrorText } from '../style.js';
import Button from '../components/Button';

export default function Login() {
  const userKit = new UserKit()
  const { setUserInfo } = useContext(UserContext) 

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [checkInput, setCheckInput] = useState(null)

  const history = useHistory()
  const searchString = history.location.search
  const urlParameters = new URLSearchParams(searchString)

  const [uid, setUid] = useState(urlParameters.get('uid'))
  const [token, setToken] = useState(urlParameters.get('token'))

  function handleActivateUser(){
    userKit.arctivateUser(uid, token)
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
      if(data.token !== undefined){
        userKit.setToken(data.token)
        userKit.getClientInfo()
        .then(res => res.json())
        .then(data => {
          setUserInfo(data) 
        })
        history.push("/home")
      } else {
        setCheckInput(true)
      }
    })
  }

  return (
    <div>
      {uid && token ? (
        <div>
          <h2>Activate Account</h2>
          <Button onClick={handleActivateUser}>Activate User</Button>
        </div>

      ):(
        <FormLogin>
          <h2>Login</h2>
          <Input placeholder="Email" 
                value={loginEmail} 
                onChange={ (e) => setLoginEmail(e.target.value)} />
          <Input placeholder="Password" 
                type="password"
                value={loginPassword} 
                onChange={ (e) => setLoginPassword(e.target.value)} />
          {checkInput && <ErrorText>Incorrect email or password</ErrorText>}
          <Button onClick={handleLogin}>Login</Button>
        </FormLogin>
      )
    }
    </div>
  )
}
