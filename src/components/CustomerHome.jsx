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
      <CustomerForm handleGetCustomerList={handleGetCustomerList} />
    </div>
  )
}
