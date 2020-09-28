import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { UserContext} from '../contexts/UserContext'
import UserKit from '../data/UserKit'
import { SmallButton } from '../style'

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
    align-items: center;
    list-style: none;
    padding: 0;
  }
`

const Main = styled.main`
  padding: 10vh 0;
  min-height: 80vh;
  width: 100%;
  background-color: white;
  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    color: #333;
    line-height: 1.2;
    letter-spacing: 1px;
  }
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
            <li>
              {userInfo && <>{userInfo.email} {userInfo.firstName} {userInfo.lastName} </>}
              {userKit.getToken() && (<SmallButton onClick={handleLogout}>Logout</SmallButton>)}
            </li>
          </ul>
        </StyledNav>
      </header>
      <Main>{children}</Main>
    </div>
  )
}
