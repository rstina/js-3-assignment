import React, {useEffect, useState} from 'react'
import UserKit from '../data/UserKit'
import { FormLogin } from '../style'

export default function CustomerDetail(props) {
  const userKit = new UserKit()
  const [customerInfo, setCustomerInfo] = useState(null)


  useEffect( () => {
    fetchCustomerDetail()
  }, [] )

  function fetchCustomerDetail(){
    const customerId = props.match.params.id
    userKit.getCustomerInfo(customerId)
    .then( res => res.json())
    .then( data => setCustomerInfo(data))
  }
  
  return (
    <div>
      <h1>Customer Detail Page</h1>
      {customerInfo && (
         (
          <FormLogin>
            <h2>{customerInfo.name}</h2>
            <p>Organisation Nr: {customerInfo.organisationNr}</p>
            <p>Vat Nr: {customerInfo.reference}</p>
            <p>Reference: {customerInfo.reference}</p>
            <p>Payment Term: {customerInfo.reference}</p>
            <p>Website: {customerInfo.reference}</p>
            <p>Email: {customerInfo.reference}</p>
            <p>Phone Number: {customerInfo.reference}</p>
          </FormLogin>
        )
      )

      }
    </div>
  )
}
