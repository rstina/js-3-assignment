import React, {useContext} from 'react'
import styled from 'styled-components'
import { UserContext} from '../contexts/UserContext'

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
  const { userInfo } = useContext(UserContext)  

  return (
    <div>
      <header>
        <StyledNav>
          <ul>
            <li><h1>Business Project</h1></li>
            {userInfo && (<li>{userInfo.email} | {userInfo.firstName} {userInfo.lastName}</li>)}
          </ul>
        </StyledNav>
      </header>
      <div>{children}</div>
    </div>
  )
}
