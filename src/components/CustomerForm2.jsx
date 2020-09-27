import React, {useState} from 'react'
import UserKit from '../data/UserKit'
import Button from './Button';
import { Input, InputWrapper, FormWrapper } from '../style.js';

export default function CustomerForm2({handleGetCustomerList}) {
  const userKit = new UserKit()

  const [customerName, setCustomerName] = useState(null)
  const [customerOrgNr, setCustomerOrgNr] = useState(null)
  const [customerVatNr, setCustomerVatNr] = useState(null)
  const [customerReference, setCustomerReference] = useState(null)
  const [paymentTerm, setPaymentTerm] = useState(null)
  const [website, setWebsite] = useState(null)
  const [email, setEmail] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)

  function handleAddCustomer(){
    userKit.addCustomer( 
      customerName, 
      customerOrgNr, 
      customerVatNr, 
      customerReference,
      paymentTerm,
      website,
      email,
      phoneNumber
      )
    .then(res => res.json())
    .then(data => { handleGetCustomerList() })
  }

  return (
    <div>
      
      <h2>Add New Customer Information</h2>
    <FormWrapper>

      <InputWrapper>

        {/* 	string
              title: Name
              maxLength: 50
              minLength: 1 */}
        <Input type="text" name="fullName" placeholder="Full Name" 
          onChange={ (e) => { 
            setCustomerName(e.target.value) 
            if(e.target.value.length > 50){
              console.log("max 50")
            }
            } } />

        {/* 	string
              title: Organisation nr
              maxLength: 30
              x-nullable: true */}
        <Input type="text" name="organisationNr" placeholder="Organisation Nr" 
          onChange={ (e) => { setCustomerOrgNr(e.target.value) } } />

        {/* validera för SE följt av 10 siffror */}
        {/* string
            title: Vat nr
            maxLength: 15
            x-nullable: true */}
        <Input type="text" name="vatNR" placeholder="VAT nr" 
          onChange={ (e) => { setCustomerVatNr(e.target.value) } } />

        {/* 	string
              title: Reference
              maxLength: 50
              x-nullable: true */}
        <Input type="text" name="reference" placeholder="Reference" 
          onChange={ (e) => { setCustomerReference(e.target.value) } } />

        {/* OBS!!! betalningsvillkor i dagar - siffra måste skickas med */}
        {/* 	integer
              title: Payment term
              maximum: 2147483647
              minimum: 0 */}
        <Input type="text" name="paymentTerm" placeholder="Payment Term" 
          onChange={ (e) => { setPaymentTerm(e.target.value) } } />

        {/* 	string
              title: Website
              maxLength: 50
              x-nullable: true */}
        <Input type="text" name="website" placeholder="Website" 
          onChange={ (e) => { setWebsite(e.target.value) } } />

        {/* string($email)
            title: Email
            maxLength: 254
            x-nullable: true */}
        <Input type="email" name="email" placeholder="Email" 
          onChange={ (e) => { setEmail(e.target.value) } } />

        {/* string
            title: Phone number
            maxLength: 20
            x-nullable: true */}
        <Input type="text" name="phoneNumber" placeholder="Phone Number" 
          onChange={ (e) => { setPhoneNumber(e.target.value) } } />

      </InputWrapper>

      <Button onClick={handleAddCustomer}>Add Customer</Button>
      
    </FormWrapper>
    </div>
  )
}
