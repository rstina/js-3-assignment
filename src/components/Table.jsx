import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  background: #fff;
  color: #555;
  margin-bottom: 2rem;
  border-collapse: collapse;
  border: none;
  width: 100%;
  th {
    background-color: ${ props => props.theme.colors.main };
    color: ${ props => props.theme.colors.white };
    padding: 0.5rem 0;
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    letter-spacing: 1px;
  }
  td, th {
    padding: 8px;
  }
  tbody {
    border: 1px solid ${ props => props.theme.colors.light };
  }
  tr:nth-child(even){
    background-color: ${ props => props.theme.colors.light };
  }
  a {
    text-decoration: underline;
    &:hover{
      color: ${ props => props.theme.colors.accent };
    }
  }
`

export default function Table({children}) {
  return (
    <StyledTable>
      {children}
    </StyledTable>
  )
}
