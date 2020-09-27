import React from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'

export default function Redirect() {
  return (
    <div>
      <h2>Login or register</h2>
      <Link to="/login"><Button>Login</Button></Link>
      <Link to="/register"><Button primary>Register</Button></Link>
    </div>
  )
}
