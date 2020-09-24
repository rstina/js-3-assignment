import React, {useState, useEffect} from 'react'
import UserKit from '../data/UserKit';
import { FormLogin } from '../style.js';
import CustomerList from '../components/CustomerList';
import CustomerForm from '../components/CustomerForm';

export default function Home() {
  const userKit = new UserKit()

  const [orgName, setOrgName] = useState(null)

  useEffect(() => {
    handleGetUserOrganisation()
  },[])

  function handleGetUserOrganisation(){
    userKit.getUser()
    .then(res => res.json())
    .then( data => {
      setOrgName(data.results[0].name)
    })
  }
  
  return (
    <div>
      {orgName && (<h2>Home - {orgName}</h2>)}
      <FormLogin>
        <CustomerForm />
        <br/>
        <CustomerList />
      </FormLogin>
    </div>
  )
}
