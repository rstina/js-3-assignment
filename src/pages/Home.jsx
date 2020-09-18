import React, {useState, useRef, useEffect} from 'react'
import UserKit from '../data/UserKit';
import { ButtonLogin, Input, FormLogin } from '../style.js';

export default function Home() {
  const userKit = new UserKit()

  const [customers, setCustomers] = useState(null)
  const [customerName, setCustomerName] = useState(null)
  const [orgName, setOrgName] = useState(null)

  const customerInput = useRef(null)

  useEffect(() => {
    getUserOrganisation()
  })


  function getCustomerList(){
    userKit.getCustomerList()
    .then(res => res.json())
    .then( data => {
      setCustomers(data.results)
    })
  }

  function getUserOrganisation(){
    userKit.getUser()
    .then(res => res.json())
    .then( data => {
      setOrgName(data.results[0].name)
    })
  }

  function handleAddCustomer(){
    userKit.addCustomer(customerName)
    customerInput.current.value = ""
  }
  
  return (
    <div>
      {orgName && (<h2>Home - {orgName}</h2>)}
      <FormLogin>
        <label htmlFor="fullName" value="Full Name">
          <Input type="text" name="fullName" placeholder="Full Name" 
            ref={customerInput}
            onChange={ (e) => {
              setCustomerName(e.target.value)} } />
        </label>
        <ButtonLogin onClick={handleAddCustomer}>Add Customer</ButtonLogin>
      </FormLogin>
      <br/>
      <br/>
      <FormLogin>
        <ButtonLogin onClick={getCustomerList}>View Customers</ButtonLogin>
        <div>
          {customers && customers.map( (customer, index) => {
            return (<p key={index}>{customer.name}</p>)
          })
          }
        </div>
      </FormLogin>
    </div>
  )
}
