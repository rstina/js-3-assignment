import React, { useEffect, useContext } from 'react'
import CustomerList from './CustomerList'
import CustomerForm from './CustomerForm'
import UserKit from '../data/UserKit';
import { CustomerListContext} from '../contexts/CustomerListContext'

export default function CustomerHome() {
  const userKit = new UserKit()
  const { customerList, setCustomerList } = useContext(CustomerListContext)

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
      <CustomerList customerList={customerList}  />

      {customerList && customerList.length < 10 ? <div>
        <h2>Create New Customer</h2>
        <CustomerForm handleGetCustomerList={handleGetCustomerList} /> 
      </div>
      : <h2>Delete an old customer to add a new (max 10)</h2>}
      
    </div>
  )
}
