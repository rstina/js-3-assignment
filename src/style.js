import styled from 'styled-components';

export const MainSection = styled.section`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #f8f8f8;
`

export const FormWrapper = styled.form`
  background: #f7f7f7;
  padding: 3rem;
`

export const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
`

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  padding: 0.7rem 1rem;
  color: #333;
  border: 1px solid #ddd;
  box-sizing: border-box;
  line-height: 1.4;
`

export const ErrorText = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
`

export const SmallButton = styled.button`
  padding: 0.25rem 0.5rem;
  margin: 1rem auto;
  font-size: 0.9rem;
  font-weight: 400;
  background-color: white;
  border: none;
  color:  ${ props => props.theme.colors.main };
  transition: background-color 0.25s;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${ props => props.theme.colors.dark };
  }
`

export const DeleteButton = styled(SmallButton)`
  margin: 0;
  text-align: center;
  width: 27px;
  height: 27px;
  padding: 0.25rem;
  font-weight: 500;
  color: white;
  background-color: ${ props => props.theme.colors.main };
  border: 1px solid ${ props => props.theme.colors.main };  
  &:hover {
    background-color: ${ props => props.theme.colors.accent };
    border: 1px solid ${ props => props.theme.colors.accent };
  }
`

export const Table = styled.table`
  background: #fff;
  color: #555;
  margin-bottom: 2rem;
  border-collapse: collapse;
  border: none;
  width: 100%;
  th {
    background-color: ${ props => props.theme.colors.main };
    color: white;
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