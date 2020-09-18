import styled from 'styled-components';

export const Main = styled.main`
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  box-sizing: border-box;
  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: #333;
  }
`

export const Button = styled.button`
  display: inline-block;
  border-radius: 4px;
  padding: 0.75rem 0;
  width: 100%;
  background: #006bb3;
  color: white;
  border: 2px solid #006bb3;
  margin: 0.5rem 0;
  &:hover {
    cursor: pointer;
    background: #333;
  border: 2px solid #333;
  }
`

export const ButtonLogin = styled.button`
  display: inline-block;
  border-radius: 4px;
  padding: 0.65rem 0;
  width: 100%;
  background: #006bb3;
  color: white;
  border: 2px solid #006bb3;
  margin: 0.75rem 0;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    background: #004d80;
    border: 2px solid #004d80;
  }  
`

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  color: #333;
  border: 1px solid #ddd;
  margin: 0.5rem 0;
  box-sizing: border-box;
  font-size: 0.9rem;
`

export const FormLogin = styled.section`
  h2 {
    margin: 0 0 0.5rem 0;
    font-weight: 400;
    color: #333;
  }
  border-radius: 4px;
  background: #f2f2f2;
  padding: 3rem;
`