import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  margin: 0.75rem 0;
  padding: 0.65rem 0;
  width: 100%;
  max-width: 500px;
  font-size: 1rem;
  color: white;
  background: ${ props => props.theme.colors.main };
  border: 2px solid ${ props => props.theme.colors.main };
  &:hover {
    cursor: pointer;
    background: ${ props => props.theme.colors.dark };
    border: 2px solid ${ props => props.theme.colors.dark };
  }  
`
export default function Button({children, onClickFunction}) {
  return (
    <StyledButton onClick={onClickFunction}>{children}</StyledButton>
  )
}
