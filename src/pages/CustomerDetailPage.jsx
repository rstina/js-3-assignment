import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'
import { FormWrapper, MainSection } from '../style'
import CustomerDetailCard from '../components/CustomerDetailCard'
import CustomerDetailEdit from '../components/CustomerDetailEdit'
import Button from '../components/Button';
import Redirect from '../components/Redirect'

export default function CustomerDetail(props) {
  const userKit = new UserKit()
  const history = useHistory()

  const [customerInfo, setCustomerInfo] = useState(null)
  const [edit, setEdit] = useState(false)

  useEffect( () => {
    fetchCustomerDetail()
  }, [] )

  function fetchCustomerDetail(){
    const customerId = props.match.params.id
    userKit.getCustomerInfo(customerId)
    .then( res => res.json())
    .then( data => setCustomerInfo(data))
  }

  function handleCustomerEdit() {
    setEdit(true)
  }

  function handleCustomerDelete() {
    userKit.deleteCustomer(props.match.params.id)
    .then(history.push('/home'))
  }

  if(userKit.getToken()){
    return (
      <MainSection>
        {customerInfo && (
          <FormWrapper>
            {edit===true && ( 
              <div>
                <CustomerDetailEdit
                  id={customerInfo.id}
                  name={customerInfo.name}
                  organisationNr={customerInfo.organisationNr}
                  vatNr={customerInfo.vatNr}
                  reference={customerInfo.reference}
                  paymentTerm={customerInfo.paymentTerm}
                  website={customerInfo.website}
                  email={customerInfo.email}
                  phoneNumber={customerInfo.phoneNumber}
                  />
              </div>
            )}
            {edit===false && ( 
              <div>
                <CustomerDetailCard
                  id={customerInfo.id}
                  name={customerInfo.name}
                  organisationNr={customerInfo.organisationNr}
                  vatNr={customerInfo.vatNr}
                  reference={customerInfo.reference}
                  paymentTerm={customerInfo.paymentTerm}
                  website={customerInfo.website}
                  email={customerInfo.email}
                  phoneNumber={customerInfo.phoneNumber}
                  />
                <Button onClick={handleCustomerEdit}>Edit</Button>
                <Button onClick={handleCustomerDelete}>Delete</Button>
              </div>
            )}
          </FormWrapper>
        )}
      </MainSection>
    )
  } else {
    return (
      <div>
        <Redirect />
      </div>
    )
  }

}
