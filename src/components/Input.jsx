import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  /* display: inline-block; */
  /* margin: 0.25rem 0; */
  padding: 0.25rem .75rem;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 0;
  box-sizing: border-box;
  font-size: 0.9rem;
  /* max-width: 300px; */
`

export default function Input({type, name, placeholder}) {

  return (
    <StyledInput
      type={type} 
      name={name} 
      placeholder={placeholder}
      />
  )
}
