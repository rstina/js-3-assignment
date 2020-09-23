import React, {useState, useEffect} from 'react'
import UserKit from '../data/UserKit';
import { Input, FormLogin } from '../style.js';
import Button from '../components/Button';
import CustomerList from '../components/CustomerList';

export default function Home() {
  const userKit = new UserKit()

  const [orgName, setOrgName] = useState(null)

  const [customerName, setCustomerName] = useState(null)
  const [customerOrgNr, setCustomerOrgNr] = useState(null)
  const [customerReference, setCustomerReference] = useState(null)

  useEffect(() => {
    handleGetUserOrganisation()
  })

  function handleGetUserOrganisation(){
    userKit.getUser()
    .then(res => res.json())
    .then( data => {
      setOrgName(data.results[0].name)
    })
  }

  function handleAddCustomer(){
    userKit.addCustomer( customerName, customerOrgNr, customerReference)
  }
  
  return (
    <div>
      {orgName && (<h2>Home - {orgName}</h2>)}
      <FormLogin>
        <h2>Add New Customer</h2>
        <Input type="text" name="fullName" placeholder="Full Name" 
          onChange={ (e) => {
            setCustomerName(e.target.value)
          } } />
        <Input type="text" name="organisationNr" placeholder="Organisation Nr" 
          onChange={ (e) => {
            setCustomerOrgNr(e.target.value)
          } } />
        <Input type="text" name="reference" placeholder="Reference" 
          onChange={ (e) => {
            setCustomerReference(e.target.value)
          } } />
          <Button onClickFunction={handleAddCustomer}>Add Customer</Button>
        <br/>
        <br/>
        <CustomerList />
      </FormLogin>
    </div>
  )
}
