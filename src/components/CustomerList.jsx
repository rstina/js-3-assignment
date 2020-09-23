import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserKit from '../data/UserKit';
// import Button from '../components/Button';

export default function CustomerList() {
  const userKit = new UserKit()
  const [customers, setCustomers] = useState(null)

  useEffect(() => {
    handleGetCustomerList()
  },[])

  function handleGetCustomerList(){
    userKit.getCustomerList()
    .then(res => res.json())
    .then( data => {
      setCustomers(data.results)
    })
  }


  return (
    <div>
      {/* <Button onClickFunction={handleGetCustomerList}>View Customers</Button> */}
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
          {customers && customers.map( (customer, index) => {
            return (
                <tr key={index}>
                  <td><Link to={`/customer-detail/${customer.id}`}>{customer.id}</Link></td>
                  <td>{customer.name}</td>
                  <td>{customer.organisationNr}</td>
                  <td>{customer.reference}</td>
                  <td><button onClick={
                    () => { userKit.deleteCustomer(customer.id)}}>x</button></td>
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
