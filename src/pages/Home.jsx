import React, {useState, useRef} from 'react'
import UserKit from '../data/UserKit';

export default function Home() {
  const userKit = new UserKit()

  const [customers, setCustomers] = useState(null)
  const [customerName, setCustomerName] = useState(null)
  const customerInput = useRef(null)

  function getCustomerList(){
    userKit.getCustomerList()
    .then(res => res.json())
    .then( data => {
      setCustomers(data.results)
    })
  }

  function handleAddCustomer(){
    // userKit.addCustomer(customerName)
    customerInput.current.value = ""
  }

  return (
    <div>
        <h2>Home</h2>
      <div>
        <label htmlFor="fullName" value="Full Name">
          <input type="text" name="fullName" placeholder="Full Name" 
            ref={customerInput}
            onChange={ (e) => {
              setCustomerName(e.target.value)} } />
        </label>
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
      <br/>
      <br/>
      <div>
        <button onClick={getCustomerList}>View Customers</button>
        <div>
          {customers && customers.map( (customer, index) => {
            return (<p key={index}>{customer.name}</p>)
          })
          }
        </div>
      </div>
    </div>
  )
}
