import React from 'react'
import CustomerHome from '../components/CustomerHome';
import Redirect from '../components/Redirect';
import UserKit from '../data/UserKit';
import {MainSection} from '../style'

export default function Home() {  
  const userKit = new UserKit()
  return (
    <MainSection>
      {userKit.getToken() ? <CustomerHome/> : <Redirect/> }
    </MainSection>
  )
}
