import React from 'react'

export default function CustomerDetailCard( { name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber } ){
    return (
      <div>
        <h2>{name}</h2>
        <p>Organisation Nr: {organisationNr}</p>
        <p>Vat Nr: {vatNr}</p>
        <p>Reference: {reference}</p>
        <p>Payment Term: {paymentTerm}</p>
        <p>Website: {website}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
      </div>
    )
}
