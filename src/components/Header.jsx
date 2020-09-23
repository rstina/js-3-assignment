import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  h1 {
      display: inline;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`

export default function Header({children}) {

  return (
    <div>
      <header>
        <StyledNav>
          <ul>
            <li><h1>Business Project</h1></li>
          </ul>
        </StyledNav>
      </header>
      <div>{children}</div>
    </div>
  )
}
