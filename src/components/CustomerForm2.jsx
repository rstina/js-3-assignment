import React from 'react'
import { useForm } from "react-hook-form";
import UserKit from '../data/UserKit'
import Button from './Button';
import { Input, InputWrapper, FormWrapper } from '../style.js';

export default function CustomerForm2({handleGetCustomerList}) {
  const userKit = new UserKit()

  const { handleSubmit, register, errors } = useForm()
  const addCustomerOnSubmit = (values) => { 
    userKit.addCustomer( 
      values.fullName, 
      values.organisationNr, 
      values.vatNr, 
      values.reference,
      values.paymentTerm,
      values.website,
      values.email,
      values.phoneNumber
      )
    .then(res => res.json())
    .then(data => { handleGetCustomerList() })      
  }

  return (
    <form onSubmit={handleSubmit(addCustomerOnSubmit)} >

      <Input  
        type="text" 
        name="fullName" 
        placeholder="Full Name" 
        ref={register({
          required: "Required",
          maxLength: { value: 50, message: "To long"},
          minLength: 1,
          pattern: {
            value: /^[a-zA-Z åäöÅÄÖ]+$/i,
            message: "Invalid Name Format"
          }
        })}
      />
      {errors.fullName && errors.fullName.message}

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
      {errors.organisationNr && errors.organisationNr.message}

      <Input 
        type="text" 
        name="vatNr" 
        placeholder="VAT Number"
        ref={register({
          maxLength: {value: 12, message: "To long"},
          pattern: {
            value: /^(SE)?[0-9]{10}$/i,
            message: "Invalid VAT Number"
          }
        })}
      />
      {errors.vatNr && errors.vatNr.message}

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
      {errors.reference && errors.reference.message}

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
      {errors.paymentTerm && errors.paymentTerm.message}
      
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
      {errors.website && errors.website.message}
      
      <Input
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
      {errors.email && errors.email.message}

      <Input 
        type="text" 
        name="phoneNumber" 
        placeholder="Phone Number"
        ref={register({
          maxLength: {value: 20, message: "To long"},
          pattern: {
            value: /^[a-zA-Z0-9+-]+$/i,
            message: "Invalid Phone Number"
          }
        })}
      />
      {errors.phoneNumber && errors.phoneNumber.message}

      <Button type="submit">Submit</Button>
    </form>
  )

}
