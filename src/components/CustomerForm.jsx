import React, {useState, useEffect, useContext} from 'react'
import UserKit from '../data/UserKit'
import { CustomerListContext} from '../contexts/CustomerListContext'
import Button from '../components/Button';
import { Input } from '../style.js';

export default function CustomerForm() {
  const userKit = new UserKit()

  const [customerName, setCustomerName] = useState(null)
  const [customerOrgNr, setCustomerOrgNr] = useState(null)
  const [customerReference, setCustomerReference] = useState(null)
  // const [customerVatNr, setCustomerVatNr] = useState(null)

  const { setCustomerList } = useContext(CustomerListContext)

  useEffect(() => {
    handleGetCustomerList()
  }, [])

  function handleGetCustomerList(){
    userKit.getCustomerList()
    .then(res => res.json())
    .then( data => { setCustomerList(data.results) })
  }

  function handleAddCustomer(){
    userKit.addCustomer( customerName, customerOrgNr, customerReference)
    .then(userKit.getCustomerList()
      .then(res => res.json())
      .then( data => { handleGetCustomerList() })
    )
  }

  return (
    <div>
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
        {/* <Input type="text" name="vatNR" placeholder="VAT nr" 
          onChange={ (e) => {
            setCustomerVatNr(e.target.value)
          } } /> */}
        <Button onClickFunction={handleAddCustomer}>Add Customer</Button>
      
    </div>
  )
}
