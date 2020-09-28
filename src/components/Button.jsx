import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: block;
  margin: 0.75rem 0;
  padding: 0.65rem 0;
  width: 100%;
  margin: 1rem auto;
  font-size: 1rem;
  background-color: ${ props => props.theme.colors.main };
  border: 2px solid ${ props => props.theme.colors.main };
  color:  white;
  transition: background-color 0.25s;
  &:hover {
    cursor: pointer;
    background-color: ${ props => props.theme.colors.dark };
    border: 2px solid ${ props => props.theme.colors.dark };
  }
`
export default function Button({children, onClick, type}) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}
