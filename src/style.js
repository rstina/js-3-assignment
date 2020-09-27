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
  /* margin: 0.5rem 0; */
  padding: 0.6rem .75rem;
  color: #333;
  border: 1px solid #ddd;
  /* border-radius: 4px; */
  box-sizing: border-box;
  /* font-size: 0.9rem; */
  /* max-width: 300px; */
`

export const Label = styled.label`
  display: block;
  margin-top: 1rem;
`

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
`

export const FormWrapper = styled.section`
  background: #f2f2f2;
  padding: 1rem;
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
export const ErrorText = styled.p`
  font-size: 0.9rem;
  color: red;
  margin: 0;
`