import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonRegular} from '../style'

export default function Redirect() {
  return (
    <div>
      <h2>Login or register</h2>
      <Link to="/login"><ButtonRegular>Login</ButtonRegular></Link>
      <Link to="/register"><ButtonRegular secondary>Register</ButtonRegular></Link>
    </div>
  )
}
