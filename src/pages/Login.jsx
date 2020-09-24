import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'
import { FormLogin } from '../style.js';
// import { Input, FormLogin } from '../style.js';
// import Button from '../components/Button';

export default function Login() {
  const userKit = new UserKit()

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

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
      userKit.setToken(data.token);
      history.push("/home")
    })
  }

  return (
    <div>
      {uid && token ? (
        <div>
          {/* visa ifall man har uid och token i url:en annars login */}
          <h2>Activate Account</h2>
          <button onClick={handleActivateUser}>Activate User</button>
        </div>

      ):(
        <FormLogin>
          <h2>Login</h2>
          <input placeholder="Email" 
                value={loginEmail} 
                onChange={ (e) => setLoginEmail(e.target.value)} />
          <input placeholder="Password" 
                type="password"
                value={loginPassword} 
                onChange={ (e) => setLoginPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </FormLogin>
      )
    }
    </div>
  )
}
