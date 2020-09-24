import React, { useEffect, useContext } from 'react'
import CustomerList2 from './CustomerList2'
import CustomerForm2 from './CustomerForm2'
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
      <CustomerForm2 handleGetCustomerList={handleGetCustomerList} />
      <CustomerList2 customerList={customerList}  />
    </div>
  )
}
