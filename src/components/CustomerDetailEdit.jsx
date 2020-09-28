import React from 'react'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import UserKit from '../data/UserKit';
import Button from './Button';
import {Input, Label, ErrorText, FormWrapper} from '../style'

export default function CustomerDetailEdit({id, name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber}) {
  const userKit = new UserKit()
  const history = useHistory()
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      id,
      name,
      organisationNr, 
      vatNr, 
      reference, 
      paymentTerm, 
      website, 
      email, 
      phoneNumber
    }
  })

  const handleCustomerPutOnSubmit = (values) => { 
    userKit.putCustomer(
      values.id,
      values.name, 
      values.organisationNr, 
      values.vatNr, 
      values.reference,
      values.paymentTerm,
      values.website,
      values.email,
      values.phoneNumber
    )
    history.push('/home')
  }

  return (
    <FormWrapper onSubmit={handleSubmit(handleCustomerPutOnSubmit)} >
      <h2>Edit Customer</h2>
        <Label htmlFor="name"><span>*</span>Full Name:</Label>
        <input type="hidden" name="id" ref={register}/>
        <Input  
          type="text" 
          name="name" 
          placeholder="Full Name" 
          ref={register({
            required: "Required",
            maxLength: { value: 50, message: "To long" },
            minLength: { value: 1 },
            pattern: {
              value: /^[a-zA-Z åäöÅÄÖ]+$/i,
              message: "Invalid Name Format"
            }
          })}
        />
        {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}

        <Label htmlFor="organisationNr">Organisation Number:</Label>
        <Input 
          type="text" 
          name="organisationNr" 
          placeholder="Organisation Number"
          ref={register({
            maxLength: {value: 30, message: "To long"},
            pattern: {
              value: /^[a-zA-Z0-9 åäöÅÄÖ]+$/i,
              message: "Invalid Organisation Number"
            }
          })}
        />
        {errors.organisationNr && <ErrorText>{errors.organisationNr.message}</ErrorText>}

        <Label htmlFor="vatNr">VAT Number:</Label>
        <Input 
          type="text" 
          name="vatNr" 
          placeholder="VAT Number"
          ref={register({
            maxLength: {value: 12, message: "To long"},
            pattern: {
              value: /^(SE)?[0-9]{10}$/i,
              message: "Incorrect VAT Number Format"
            }
          })}
        />
        {errors.vatNr && <ErrorText>{errors.vatNr.message}</ErrorText>}

        <Label htmlFor="reference">Reference:</Label>
        <Input 
          type="text" 
          name="reference" 
          placeholder="Reference"
          ref={register({
            maxLength: {value: 50, message: "To long"},
            pattern: {
              value: /^[a-zA-Z0-9 åäöÅÄÖ&?%+-./:]+$/i,
              message: "Invalid Reference"
            }
          })}
        />
        {errors.reference && <ErrorText>{errors.reference.message}</ErrorText>}

        <Label htmlFor="paymentTerm"><span>*</span>Payment Term:</Label>
        <Input 
          type="text" 
          name="paymentTerm" 
          placeholder="Payment Term"
          ref={register({
            required: "Required",
            max: {value: 2147483647, message: "To great a number"},
            min: {value: 0, message: "To low a number"},
            pattern: {
              value: /^[0-9]+$/i,
              message: "Invalid Payment Term"
            }
          })}
        />
        {errors.paymentTerm && <ErrorText>{errors.paymentTerm.message}</ErrorText>}
      
        <Label htmlFor="website">Website:</Label>
        <Input 
          type="text" 
          name="website" 
          placeholder="Website"
          ref={register({
            maxLength: {value: 50, message: "To long"},
            pattern: {
              value: /^[a-zA-Z0-9åäöÅÄÖ&?%+-./:]+$/i,
              message: "Invalid Website"
            }
          })}
        />
        {errors.website && <ErrorText>{errors.website.message}</ErrorText>}
        
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          ref={register({
            maxLength: {value: 254, message: "To long"},
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email"
            }
          })}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Label htmlFor="phoneNumber">Phone Number:</Label>
        <Input 
          type="text" 
          name="phoneNumber" 
          placeholder="Phone Number"
          ref={register({
            maxLength: {value: 20, message: "To long"},
            pattern: {
              value: /^[a-zA-Z 0-9+-]+$/i,
              message: "Invalid Phone Number"
            }
          })}
        />
        {errors.phoneNumber && <ErrorText>{errors.phoneNumber.message}</ErrorText>}
      <Button type="submit">Save Edited Customer</Button>
    </FormWrapper>
  )

}
