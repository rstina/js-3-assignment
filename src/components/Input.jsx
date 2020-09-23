import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 0.9rem;
  max-width: 500px;
`

export default function Input({children}) {

  return (
    <StyledInput>
      {children}
    </StyledInput>
  )
}
