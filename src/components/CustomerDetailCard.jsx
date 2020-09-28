import React from 'react'
import { Table } from '../style'

export default function CustomerDetailCard( { name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber } ){
    return (
      <div>
        <Table>
          <tbody>
            <tr>
              <th>Customer Detail</th>
              <th></th>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Organisation Number:</td>
              <td>{vatNr}</td>
            </tr>
            <tr>
              <td>Vat Number:</td>
              <td>{vatNr}</td>
            </tr>
            <tr>
              <td>Reference:</td>
              <td>{reference}</td>
            </tr>
            <tr>
              <td>Payment Term:</td>
              <td>{paymentTerm}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{website}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>{phoneNumber}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
}
