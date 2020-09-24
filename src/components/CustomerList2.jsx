import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserKit from '../data/UserKit';
import { CustomerListContext} from '../contexts/CustomerListContext'


export default function CustomerList2({customerList}) {
  const userKit = new UserKit()
  const { setCustomerList } = useContext(CustomerListContext)

  useEffect(() => {
    handleGetCustomerList()
  }, [])

  function handleGetCustomerList(){
    userKit.getCustomerList()
    .then(res => res.json())
    .then( data => { setCustomerList(data.results) })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>OrgNr</th>
            <th>Reference</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customerList && customerList.map( (customer, index) => {
            return (
                <tr key={index}>
                  <td><Link to={`/customer-detail/${customer.id}`}>{customer.id}</Link></td>
                  <td>{customer.name}</td>
                  <td>{customer.organisationNr}</td>
                  <td>{customer.reference}</td>
                  <td><button onClick={
                    () => { 
                      userKit.deleteCustomer(customer.id)
                      .then(handleGetCustomerList())
                      }}>x</button></td>
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
