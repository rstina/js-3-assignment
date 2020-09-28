import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserKit from '../data/UserKit';
import { CustomerListContext} from '../contexts/CustomerListContext'
import { DeleteButton, Table } from '../style';


export default function CustomerList({customerList}) {
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
    <h2>Customer Home</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Org Nr</th>
            <th>Reference</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
  {customerList && customerList.length < 1 ? <tr><td>No Customers</td></tr> : <tr></tr> }
          {customerList && customerList.map( (customer, index) => {
            return (
              <tr key={index}>
                <td><Link to={`/customer-detail/${customer.id}`}>{customer.name}</Link></td>
                <td>{customer.organisationNr}</td>
                <td>{customer.reference}</td>
                <td><DeleteButton onClick={
                  () => { 
                    userKit.deleteCustomer(customer.id)
                    .then(() => { handleGetCustomerList() })
                    }}>x</DeleteButton></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
