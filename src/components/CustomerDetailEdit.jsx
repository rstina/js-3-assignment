import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Input, Label} from '../style'
import Button from './Button';
import UserKit from '../data/UserKit';

export default function CustomerDetailEdit({id, name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber}) {
  const userKit = new UserKit()
  const history = useHistory()

  const [newName, setNewName] = useState(name)
  const [newOrganisationNr, setNewOrganisationNr] = useState(organisationNr)
  const [newVatNr, setNewVatNr] = useState(vatNr)
  const [newReference, setNewReference] = useState(reference)
  const [newPaymentTerm, setNewPaymentTerm] = useState(paymentTerm)
  const [newWebsite, setNewOrgNr] = useState(website)
  const [newEmail, setNewEmail] = useState(email)
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber)
  
  function renderInput(index, placeholder, defaultValue, stateVariable, setStateVariable){
    return(
      <div key={index}>
        <Label>{placeholder}: </Label>
        <Input 
          placeholder={placeholder} 
          defaultValue={defaultValue} 
          onChange={ (e) => setStateVariable(e.target.value) }
        />
      </div>
    )
  }

  function handleCustomerPut() {
    userKit.putCustomer(
      id,
      newName, 
      newOrganisationNr, 
      newVatNr, 
      newReference,
      newPaymentTerm,
      newWebsite,
      newEmail,
      newPhoneNumber
    )
    history.push('/home')
  }

  const inputObjects = [
    ["Name", name, newName, setNewName],
    ["Organisation Nr",organisationNr, newOrganisationNr, setNewOrganisationNr],
    ["Vat Nr", vatNr, newVatNr, setNewVatNr],
    ["Reference", reference, newReference, setNewReference],
    ["Payment Term",paymentTerm, newPaymentTerm, setNewPaymentTerm],
    ["Website",website, newWebsite, setNewOrgNr],
    ["Email",email, newEmail, setNewEmail],
    ["Phone Number",phoneNumber, newPhoneNumber, setNewPhoneNumber]
  ]

  return (
    <div>
      <h2>Edit - {name}</h2>
      {inputObjects && inputObjects.map((inputItem, index)=>{
        return renderInput(index, inputItem[0], inputItem[1], inputItem[2], inputItem[3])
      })}
      <Button onClick={handleCustomerPut}>Save Edit</Button>
    </div>
  )
}