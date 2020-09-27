import React from 'react'
import CustomerHome from '../components/CustomerHome';
import Redirect from '../components/Redirect';
import UserKit from '../data/UserKit';

export default function Home() {  
  const userKit = new UserKit()
  return (
    <div>
      {userKit.getToken() ? <CustomerHome/> : <Redirect/> }
    </div>
  )
}
