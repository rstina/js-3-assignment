import styled from 'styled-components';

export const Main = styled.main`
  padding: 1rem;
  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: #333;
  }
  h2 {
    margin: 1rem 0 0.5rem 0;
    font-weight: 400;
    color: #333;
  }
  p {
    color: #333;
  }
`

export const Input = styled.input`
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

export const FormLogin = styled.section`
  align-items: center;
  h2 {
    margin: 1rem 0 0.5rem 0;
    font-weight: 400;
    color: #333;
  }
  border-radius: 4px;
  background: #f2f2f2;
  padding: 0.5rem 2rem;
`