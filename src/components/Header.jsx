import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { UserContext} from '../contexts/UserContext'
import UserKit from '../data/UserKit'

const StyledNav = styled.nav`
  color: ${ props => props.theme.colors.main };
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
  h1 {
    display: inline;
    font-weight: 300;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`
const LiUserInfo = styled.li`
  font-size: 0.8rem;
  color: grey;
`

export default function Header({children}) {
  const { userInfo, setUserInfo } = useContext(UserContext) 
  const userKit = new UserKit() 
  const history = useHistory()

  function handleLogout() {
    userKit.logout()
    setUserInfo(null)
    history.push('/')
  }

  return (
    <div>
      <header>
        <StyledNav>
          <ul>
            <li><h1>BusinessName</h1></li>
            {userInfo && (<LiUserInfo>{userInfo.email} {userInfo.firstName} {userInfo.lastName}</LiUserInfo>)}
            {userKit.getToken() && (<li><button onClick={handleLogout}>Logout</button></li>)}
          </ul>
        </StyledNav>
      </header>
      <div>{children}</div>
    </div>
  )
}
