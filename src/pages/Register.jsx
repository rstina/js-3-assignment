import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Button from '../components/Button';
import UserKit from '../data/UserKit'
import {Input, Label, FormLogin} from '../style'

export default function Register() {
  const userKit = new UserKit()
  const history = useHistory()
  const { handleSubmit, register, errors } = useForm()

  const handleRegisterOnSubmit = (values) => {   
    userKit.register(
      values.firstName, 
      values.lastName, 
      values.email, 
      values.password, 
      values.organisationName, 
      values.organisationKind);
    history.push('/register-confirmation')
  }

  return (
    <FormLogin onSubmit={handleSubmit(handleRegisterOnSubmit)}>
      <h2>Register</h2>
      <form>
        <Input  
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        ref={register({
          maxLength: { value: 30, message: "To long, max 30"},
          minLength: { value: 1 },
          pattern: {
            value: /^[a-zA-Z åäöÅÄÖ]+$/i,
            message: "Invalid Name Format"
          }
        })}
      />
      {errors.firstName && errors.firstName.message}

      <Input  
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        ref={register({
          maxLength: { value: 30, message: "To long, max 30"},
          minLength: { value: 1 },
          pattern: {
            value: /^[a-zA-Z åäöÅÄÖ]+$/i,
            message: "Invalid Name Format"
          }
        })}
      />
      {errors.lastName && errors.lastName.message}

      <Input
        name="email"
        placeholder="Email"
        ref={register({
          required: "Required",
          maxLength: {value: 254, message: "To long"},
          minLength: { value: 1 },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid Email"
          }
        })}
      />
      {errors.email && errors.email.message}

      <Input  
        type="password" 
        name="password" 
        placeholder="Password" 
        ref={register({
          required: "Required",
          maxLength: { value: 50, message: "To long"},
          minLength: {value: 8, message: "Must be at least 8 characters"},
          pattern: {
            value: /^[a-zA-Z0-9-_%&?!.,]+$/i,
            message: "Invalid Password Format"
          }
        })}
      />
      {errors.password && errors.password.message}

      <Input 
        type="text" 
        name="organisationName" 
        placeholder="Organisation Name"
        ref={register({
          maxLength: {value: 70, message: "To long"},
          pattern: {
            value: /^[a-zA-Z0-9 -.?&!%åäöÅÄÖ]+$/i,
            message: "Invalid Organisation Name"
          }
        })}
      />
      {errors.organisationName && errors.organisationName.message}

      <Input 
        type="text" 
        name="organisationKind" 
        placeholder="Organisation Kind (0, 1, 2)"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[0-2]+$/i,
            message: "Must be 0, 1, 2"
          }
        })}
      />
      {errors.organisationKind && errors.organisationKind.message}

      <Button type="submit">Register</Button>

      </form>
    </FormLogin>
  )
}
